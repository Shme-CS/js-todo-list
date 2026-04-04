/**
 * To-Do List Application
 * A modern task management application using vanilla JavaScript
 * Features: Add, Edit, Delete, Complete tasks with localStorage persistence
 */

// ===================================
// State Management
// ===================================
let tasks = [];
let currentFilter = 'all';
let editingTaskId = null;

// ===================================
// DOM Elements
// ===================================
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalTasksEl = document.getElementById('totalTasks');
const activeTasksEl = document.getElementById('activeTasks');
const completedTasksEl = document.getElementById('completedTasks');

// ===================================
// Initialize Application
// ===================================
function init() {
    loadTasksFromStorage();
    renderTasks();
    updateStats();
    attachEventListeners();
}

// ===================================
// Event Listeners
// ===================================
function attachEventListeners() {
    // Form submission
    taskForm.addEventListener('submit', handleAddTask);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterChange);
    });
    
    // Event delegation for task actions
    taskList.addEventListener('click', handleTaskActions);
    taskList.addEventListener('change', handleTaskToggle);
}

// ===================================
// Task Management Functions
// ===================================

/**
 * Handle adding a new task
 */
function handleAddTask(e) {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasksToStorage();
    renderTasks();
    updateStats();
    
    // Clear input
    taskInput.value = '';
    taskInput.focus();
}

/**
 * Handle task completion toggle
 */
function handleTaskToggle(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const taskId = parseInt(e.target.dataset.id);
        toggleTaskCompletion(taskId);
    }
}

/**
 * Toggle task completion status
 */
function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.completed = !task.completed;
        saveTasksToStorage();
        renderTasks();
        updateStats();
    }
}

/**
 * Handle task actions (edit, delete, save, cancel)
 */
function handleTaskActions(e) {
    const target = e.target;
    const taskId = parseInt(target.dataset.id);
    
    if (target.classList.contains('btn-delete')) {
        deleteTask(taskId);
    } else if (target.classList.contains('btn-edit')) {
        startEditTask(taskId);
    } else if (target.classList.contains('btn-save')) {
        saveEditTask(taskId);
    } else if (target.classList.contains('btn-cancel')) {
        cancelEditTask();
    }
}

/**
 * Delete a task
 */
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    renderTasks();
    updateStats();
}

/**
 * Start editing a task
 */
function startEditTask(taskId) {
    editingTaskId = taskId;
    renderTasks();
}

/**
 * Save edited task
 */
function saveEditTask(taskId) {
    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const input = taskItem.querySelector('.task-text-input');
    const newText = input.value.trim();
    
    if (newText === '') {
        return;
    }
    
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.text = newText;
        saveTasksToStorage();
        editingTaskId = null;
        renderTasks();
    }
}

/**
 * Cancel editing
 */
function cancelEditTask() {
    editingTaskId = null;
    renderTasks();
}

// ===================================
// Filter Functions
// ===================================

/**
 * Handle filter change
 */
function handleFilterChange(e) {
    const filter = e.target.dataset.filter;
    currentFilter = filter;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    renderTasks();
}

/**
 * Get filtered tasks based on current filter
 */
function getFilteredTasks() {
    switch (currentFilter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

// ===================================
// Render Functions
// ===================================

/**
 * Render all tasks to the DOM
 */
function renderTasks() {
    const filteredTasks = getFilteredTasks();
    
    // Show/hide empty state
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        taskList.innerHTML = '';
        return;
    }
    
    emptyState.classList.add('hidden');
    
    // Render tasks
    taskList.innerHTML = filteredTasks.map(task => createTaskHTML(task)).join('');
}

/**
 * Create HTML for a single task
 */
function createTaskHTML(task) {
    const isEditing = editingTaskId === task.id;
    
    if (isEditing) {
        return `
            <li class="task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
                <input 
                    type="text" 
                    class="task-text-input" 
                    value="${escapeHtml(task.text)}"
                    autofocus
                >
                <div class="task-actions">
                    <button class="btn-icon btn-save" data-id="${task.id}">Save</button>
                    <button class="btn-icon btn-cancel">Cancel</button>
                </div>
            </li>
        `;
    }
    
    return `
        <li class="task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
            <input 
                type="checkbox" 
                class="task-checkbox" 
                ${task.completed ? 'checked' : ''}
                data-id="${task.id}"
            >
            <span class="task-text">${escapeHtml(task.text)}</span>
            <div class="task-actions">
                <button class="btn-icon btn-edit" data-id="${task.id}">Edit</button>
                <button class="btn-icon btn-delete" data-id="${task.id}">Delete</button>
            </div>
        </li>
    `;
}

/**
 * Update task statistics
 */
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;
    
    totalTasksEl.textContent = total;
    activeTasksEl.textContent = active;
    completedTasksEl.textContent = completed;
}

// ===================================
// LocalStorage Functions
// ===================================

/**
 * Save tasks to localStorage
 */
function saveTasksToStorage() {
    try {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

/**
 * Load tasks from localStorage
 */
function loadTasksFromStorage() {
    try {
        const storedTasks = localStorage.getItem('todoTasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        tasks = [];
    }
}

// ===================================
// Utility Functions
// ===================================

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================
// Start Application
// ===================================
document.addEventListener('DOMContentLoaded', init);
