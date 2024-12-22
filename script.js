// Placeholder for any interactive features

document.addEventListener('DOMContentLoaded', () => {
    console.log('Online Bookstore Loaded');

    // Example: Highlight nav links on hover
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ff6347'; // Highlight color
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = ''; // Revert to original color
        });
    });

    // Example: Add dynamic content to featured books section
    const bookList = document.querySelector('.book-list');

    if (bookList) {
        const sampleBooks = [
            'Book Title 1',
            'Book Title 2',
            'Book Title 3',
            'Book Title 4'
        ];

        sampleBooks.forEach(title => {
            const bookItem = document.createElement('div');
            bookItem.textContent = title;
            bookItem.style.padding = '10px';
            bookItem.style.border = '1px solid #ddd';
            bookItem.style.borderRadius = '5px';
            bookItem.style.textAlign = 'center';
            bookItem.style.backgroundColor = '#f9f9f9';

            bookList.appendChild(bookItem);
        });
    }
});

