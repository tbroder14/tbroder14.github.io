document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(faqContent => {
                if (faqContent !== content) {
                    faqContent.style.maxHeight = null;
                }
            });

            // Toggle the clicked FAQ
            if (isOpen) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
