// Theme Management - Disabled (always dark)
function toggleTheme() {
    // Force dark theme always - no toggle
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    body.style.backgroundColor = '#0f0f0f';
    body.style.color = '#ffffff';
    
    if (themeToggle) themeToggle.className = 'fas fa-moon';
}

// Force dark theme always
function loadTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    // Always apply dark theme
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    body.style.backgroundColor = '#0f0f0f';
    body.style.color = '#ffffff';
    
    if (themeToggle) themeToggle.className = 'fas fa-moon';
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Pomodoro Timer Functionality
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let currentMode = 'pomodoro';

const timerModes = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.textContent = display;
    }
    
    // Update circular progress
    updateTimerProgress();
}

function updateTimerProgress() {
    const circle = document.querySelector('.timer-progress-circle');
    if (circle) {
        const totalTime = timerModes[currentMode];
        const progress = ((totalTime - timeLeft) / totalTime) * 283;
        circle.style.strokeDashoffset = 283 - progress;
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                alert('🎉 Timer session complete! Great work!');
                resetTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = timerModes[currentMode];
    updateTimerDisplay();
}

// Timer Mode Switching
document.addEventListener('DOMContentLoaded', () => {
    const timerModeButtons = document.querySelectorAll('.timer-mode-btn');
    
    timerModeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            timerModeButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update timer mode
            currentMode = btn.dataset.mode;
            resetTimer();
        });
    });
});

// To-Do List Functionality
document.addEventListener('DOMContentLoaded', () => {
    const todoItems = document.querySelectorAll('.todo-item input[type="checkbox"]');
    
    todoItems.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const todoItem = e.target.closest('.todo-item');
            const label = todoItem.querySelector('label');
            
            if (e.target.checked) {
                todoItem.classList.add('completed');
            } else {
                todoItem.classList.remove('completed');
            }
            
            updateProgressBar();
        });
    });
    
    // Initialize progress bar
    updateProgressBar();
});

function updateProgressBar() {
    const todoItems = document.querySelectorAll('.todo-item');
    const completedItems = document.querySelectorAll('.todo-item.completed, .todo-item input:checked');
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (todoItems.length > 0 && progressBar && progressText) {
        const progress = (completedItems.length / todoItems.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${completedItems.length} of ${todoItems.length} completed`;
    }
}

// Modal Functions
function openCreateRoomModal() {
    const modal = document.getElementById('createRoomModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Trigger animation after display is set
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeCreateRoomModal() {
    const modal = document.getElementById('createRoomModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Hide after transition
        setTimeout(() => {
            if (!modal.classList.contains('active')) {
                modal.style.display = 'none';
            }
        }, 300);
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('createRoomModal');
    if (modal && e.target === modal) {
        closeCreateRoomModal();
    }
});

// Room Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card[data-category]');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            roomCards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Motivational Quotes
const quotes = [
    {
        text: "The beautiful thing about learning is that no one can take it away from you.",
        author: "B.B. King"
    },
    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Intelligence plus character—that is the goal of true education.",
        author: "Martin Luther King Jr."
    },
    {
        text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        author: "Dr. Seuss"
    }
];

function updateDailyQuote() {
    const today = new Date().getDate();
    const quoteIndex = today % quotes.length;
    const selectedQuote = quotes[quoteIndex];
    
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    const motivationalQuote = document.getElementById('motivational-quote');
    
    if (quoteElement) {
        quoteElement.textContent = `"${selectedQuote.text}"`;
    }
    
    if (authorElement) {
        authorElement.textContent = `- ${selectedQuote.author}`;
    }
    
    if (motivationalQuote) {
        motivationalQuote.textContent = `"${selectedQuote.text}"`;
    }
}

function refreshQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    
    if (quoteElement) {
        quoteElement.textContent = `"${selectedQuote.text}"`;
    }
    
    if (authorElement) {
        authorElement.textContent = `- ${selectedQuote.author}`;
    }
    
    // Quote refreshed
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submissions
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form type
            const formType = form.closest('.dashboard-card')?.querySelector('h3')?.textContent || 
                           form.closest('.modal-content')?.querySelector('h3')?.textContent || 'Form';
            
            // Show success message
            alert(`✅ ${formType} submitted successfully!`);
            
            // Reset form
            form.reset();
            
            // Close modal if it's in one
            const modal = form.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// Quick Action Functions
function joinStudyRoom() {
    window.location.href = 'study-rooms.html';
}

function findBuddy() {
    window.location.href = 'buddies.html';
}

function playFocusMusic() {
    alert('🎵 Focus music will be available soon! Try some lo-fi beats.');
}

function viewProgress() {
    alert('📊 Detailed analytics coming soon!');
}

function addNewTask() {
    const taskText = prompt('Enter your new task:');
    if (taskText && taskText.trim()) {
        const todoList = document.querySelector('.todo-list');
        if (todoList) {
            const taskId = 'task' + Date.now();
            const newTask = document.createElement('div');
            newTask.className = 'todo-item';
            newTask.innerHTML = `
                <input type="checkbox" id="${taskId}">
                <label for="${taskId}">${taskText.trim()}</label>
                <div class="todo-priority low"></div>
            `;
            
            // Add event listener for the new checkbox
            const checkbox = newTask.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (e) => {
                const todoItem = e.target.closest('.todo-item');
                
                                 if (e.target.checked) {
                     todoItem.classList.add('completed');
                 } else {
                     todoItem.classList.remove('completed');
                 }
                
                updateProgressBar();
            });
            
            todoList.appendChild(newTask);
            updateProgressBar();
        }
    }
}

// Notification System Removed

// Apply theme and fix alignments immediately
function applyDarkThemeAndFixAlignments() {
    loadTheme();
    
    // Force dark theme on body
    document.body.style.backgroundColor = '#0f0f0f';
    document.body.style.color = '#ffffff';
    document.body.classList.add('dark-theme');
    
    // Fix any alignment issues
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        if (!container.classList.contains('nav-container')) {
            container.style.display = 'block';
            container.style.textAlign = 'center';
        }
    });
    
    // Ensure grids are properly aligned
    const grids = document.querySelectorAll('.features-grid, .dashboard-grid');
    grids.forEach(grid => {
        grid.style.display = 'grid';
        grid.style.placeItems = 'stretch';
    });
}

// Apply immediately
applyDarkThemeAndFixAlignments();

// Initialize functions when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Apply theme and alignments again to ensure everything is correct
    applyDarkThemeAndFixAlignments();
    
    // Update daily quote
    updateDailyQuote();
    
    // Initialize timer display
    updateTimerDisplay();
    
    // Add entrance animations
    const cards = document.querySelectorAll('.dashboard-card, .feature-card, .room-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Handle action buttons click events
document.addEventListener('click', (e) => {
    // Handle study room join buttons
    if (e.target.classList.contains('room-join-btn') || 
        e.target.textContent.includes('Join Room')) {
        e.preventDefault();
        alert('🚀 Joining study room... This feature will be available soon!');
    }
    
    // Handle connect buttons
    if (e.target.textContent.includes('Connect')) {
        e.preventDefault();
        alert('👋 Connection request sent!');
    }
    
    // Handle reminder buttons
    if (e.target.classList.contains('room-remind-btn') || 
        e.target.textContent.includes('Set Reminder')) {
        e.preventDefault();
        alert('⏰ Reminder set successfully!');
    }
    
    // Handle action buttons
    if (e.target.closest('.action-btn')) {
        const actionBtn = e.target.closest('.action-btn');
        const actionTitle = actionBtn.querySelector('.action-title')?.textContent;
        
        if (actionTitle) {
            switch(actionTitle) {
                case 'Join Study Room':
                    joinStudyRoom();
                    break;
                case 'Find Study Buddy':
                    findBuddy();
                    break;
                case 'Focus Music':
                    playFocusMusic();
                    break;
                case 'View Progress':
                    viewProgress();
                    break;
            }
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + D to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Space to start/pause timer when on dashboard
    if (e.code === 'Space' && window.location.pathname.includes('dashboard')) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (isRunning) {
                pauseTimer();
            } else {
                startTimer();
            }
        }
    }
});

// Update page title with timer when running
setInterval(() => {
    if (isRunning && window.location.pathname.includes('dashboard')) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.title = `⏰ ${display} - EduLink Dashboard`;
    } else if (document.title.includes('⏰')) {
        document.title = document.title.replace(/⏰ \d{2}:\d{2} - /, '');
    }
}, 1000);

// Welcome message removed 