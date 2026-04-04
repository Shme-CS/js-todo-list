# To-Do List Web Application

A modern, responsive task management application built with vanilla JavaScript, HTML5, and CSS3. This project demonstrates clean code architecture, DOM manipulation, localStorage persistence, and professional UI/UX design.

## 🚀 Features

- **Task Management**
  - Add new tasks with a clean input interface
  - Edit existing tasks inline
  - Delete tasks with a single click
  - Mark tasks as completed with checkbox toggle

- **Smart Filtering**
  - View all tasks
  - Filter active (incomplete) tasks
  - Filter completed tasks
  - Real-time filter updates

- **Task Statistics**
  - Total tasks counter
  - Active tasks counter
  - Completed tasks counter
  - Live updates on all actions

- **Data Persistence**
  - Automatic save to browser localStorage
  - Tasks persist across browser sessions
  - No backend required

- **Modern UI/UX**
  - Clean, professional design
  - Smooth animations and transitions
  - Hover effects for better interactivity
  - Responsive layout for all devices
  - Mobile-friendly interface
  - Visual feedback for completed tasks

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Vanilla JavaScript with modern features
  - Arrow functions
  - Template literals
  - Array methods (map, filter, find)
  - LocalStorage API
  - Event delegation
  - Modular function architecture

## 📁 Project Structure

```
js-todo-list/
│
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # Styling and responsive design
├── js/
│   └── script.js       # Application logic and functionality
└── README.md           # Project documentation
```

## 🎯 Installation & Usage

### Installation

1. Clone or download this repository:
```bash
git clone <https://github.com/Shme-CS/js-todo-list>
```

2. Navigate to the project directory:
```bash
cd js-todo-list
```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local development server (e.g., Live Server in VS Code)

### Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Edit a Task**: Click the "Edit" button, modify the text, and click "Save"
4. **Delete a Task**: Click the "Delete" button to remove a task
5. **Filter Tasks**: Use the filter buttons (All, Active, Completed) to view specific tasks
6. **View Statistics**: Check the counters at the top to see your task statistics

## 💡 Key Features Explained

### Modular JavaScript Architecture

The application uses a clean, modular approach:
- Separate functions for each feature
- Event delegation for efficient event handling
- Minimal global variables
- Reusable rendering functions
- Clear separation of concerns

### LocalStorage Persistence

Tasks are automatically saved to browser localStorage:
- Saves after every action (add, edit, delete, toggle)
- Loads automatically on page load
- No data loss on browser refresh
- Works offline

### Responsive Design

The application adapts to different screen sizes:
- Desktop: Multi-column layout with hover effects
- Tablet: Adjusted spacing and sizing
- Mobile: Single-column layout, touch-friendly buttons

## 🎨 Code Quality

This project emphasizes:
- **Readability**: Clear variable and function names
- **Comments**: Comprehensive code documentation
- **Best Practices**: Modern JavaScript patterns
- **Maintainability**: Modular, reusable code
- **Performance**: Efficient DOM manipulation
- **Security**: XSS prevention with HTML escaping

## 🔮 Future Improvements

Potential enhancements for future versions:
- Task priority levels (high, medium, low)
- Due dates and reminders
- Task categories/tags
- Drag-and-drop reordering
- Dark mode toggle
- Export tasks to JSON/CSV
- Search functionality
- Task notes/descriptions
- Keyboard shortcuts
- Undo/redo functionality
- Cloud sync with backend API

## 📱 Browser Compatibility

This application works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

Requires JavaScript enabled and localStorage support.

## 📄 License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👨‍💻 Author     

Built as a portfolio project demonstrating frontend development fundamentals and JavaScript proficiency.

## 🙏 Acknowledgments

- Design inspiration from modern task management applications
- Built with best practices from the JavaScript community
- Focused on clean code and user experience

---

**Note**: This is a client-side application. All data is stored locally in your browser. Clearing browser data will remove all tasks.
