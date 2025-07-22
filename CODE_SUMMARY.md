# EduLink - Key Code Snippets for Presentation

## 🎯 Most Important Code to Understand & Explain

### 1. **HTML Structure Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduLink - Study Together, Succeed Together</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="dark-theme">
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-graduation-cap"></i>
                EduLink
            </div>
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="dashboard.html" class="nav-link">Dashboard</a></li>
            </ul>
        </div>
    </nav>
</body>
</html>
```
**Explanation**: Basic HTML5 structure with semantic navigation and responsive meta tag.

### 2. **CSS Dark Theme with Variables**
```css
/* CSS Variables for consistent theming */
:root, body {
    --bg-primary: #0f0f0f !important;
    --bg-secondary: #1a1a1a !important;
    --text-primary: #ffffff !important;
    --primary: #6366f1 !important;
}

/* Apply dark theme */
body {
    background-color: var(--bg-primary) !important;
    color: var(--text-primary) !important;
    font-family: 'Inter', sans-serif;
}
```
**Explanation**: CSS custom properties (variables) for maintainable theming system.

### 3. **Responsive Grid Layout**
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}
```
**Explanation**: CSS Grid creates responsive card layouts that adapt to screen size.

### 4. **JavaScript DOM Manipulation**
```javascript
// Theme management
function loadTheme() {
    const body = document.body;
    body.classList.add('dark-theme');
    body.style.backgroundColor = '#0f0f0f';
    body.style.color = '#ffffff';
}

// Apply theme when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
});
```
**Explanation**: JavaScript manipulates HTML elements and applies styling dynamically.

### 5. **Interactive To-Do List**
```javascript
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    
    if (todoText) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button onclick="deleteTodo(this)">×</button>
        `;
        
        document.getElementById('todoList').appendChild(todoItem);
        input.value = '';
    }
}
```
**Explanation**: Creates new HTML elements dynamically and adds them to the page.

### 6. **Pomodoro Timer Logic**
```javascript
let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            alert('Timer completed!');
            resetTimer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
```
**Explanation**: Uses setInterval to create a countdown timer with real-time display updates.

### 7. **Local Storage for Data Persistence**
```javascript
// Save user preferences
function saveTheme() {
    localStorage.setItem('theme', 'dark');
}

// Load saved preferences
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    return savedTheme;
}
```
**Explanation**: Browser's local storage remembers user settings between sessions.

### 8. **Modal Dialog System**
```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
```

```javascript
function openCreateRoomModal() {
    const modal = document.getElementById('createRoomModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
```
**Explanation**: Creates overlay dialogs that appear on top of main content.

### 9. **Responsive Navigation**
```css
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        transition: 0.3s;
    }
    
    .nav-menu.active {
        left: 0;
    }
}
```
**Explanation**: Mobile-first responsive design that adapts navigation for different screen sizes.

### 10. **Event Handling**
```javascript
// Handle button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
        // Handle primary button clicks
    }
    
    if (e.target.textContent.includes('Connect')) {
        alert('Connection request sent!');
    }
});
```
**Explanation**: Event delegation handles multiple button clicks efficiently.

## 📊 Project Statistics
- **HTML Files**: 5 pages (index, dashboard, study-rooms, buddies, timetable)
- **CSS Lines**: 1,200+ lines of styling and responsive design
- **JavaScript Lines**: 500+ lines of interactive functionality
- **Features**: 10+ interactive components
- **Responsive Breakpoints**: 3 different screen sizes supported

## 🎓 Key Concepts Demonstrated
1. **HTML5 Semantics**: Proper document structure
2. **CSS3 Modern Features**: Grid, Flexbox, Variables, Animations
3. **JavaScript ES6+**: Arrow functions, const/let, template literals
4. **Responsive Design**: Mobile-first approach
5. **User Interface**: Professional styling and interactions
6. **Data Persistence**: Local storage for user preferences
7. **Event-Driven Programming**: Interactive user interfaces

## 💡 Explanation Tips for Presentation
1. **Start with HTML**: Show the basic structure and semantic elements
2. **Explain CSS**: Demonstrate responsive design and theming
3. **Show JavaScript**: Focus on interactivity and DOM manipulation
4. **Highlight Features**: Demonstrate timer, todo list, modal dialogs
5. **Discuss Responsive**: Show how it works on different screen sizes
6. **Mention Best Practices**: Code organization, accessibility, performance 