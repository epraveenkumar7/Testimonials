// Get the testimonial container elements
const testimonialContainer = document.querySelector('.testimonial-container');
const titleElement = document.getElementById('testimonial-title');
const textElement = document.getElementById('testimonial-text');
const authorElement = document.getElementById('testimonial-author');
const imageElement = document.getElementById('client-image');


const testimonials = [
    {
        text: "“We need hope, or else we cannot endure.” — Sarah J. Maas",
        author: "hope is the best thing",
        image: "hope.jpg"
    },
    {
        text: "“Kindness is one thing you can’t give away. It always comes back. ",
        author: "be positive always",
        image: "positive.jpg"
    },
    {
        text: "As soon as you trust yourself, you will know how to live.",
        author: " believe yourself follow your dreams",
        image: "believe.jpg"
    }
];


const borderColors = ['#3498db', '#2ecc71', '#f39c12', '#e74c3c'];

function changeBorderColor() {
    let index = 0;

    setInterval(() => {
       
        testimonialContainer.style.borderColor = borderColors[index];

        index = (index + 1) % borderColors.length;
    }, 1000); 
}


function updateTestimonial() {
    let index = 0;

    setInterval(() => {
       
        titleElement.textContent = `Life On a 3 Things`;
        textElement.textContent = testimonials[index].text;
        authorElement.textContent = testimonials[index].author;
        imageElement.src = testimonials[index].image;

       
        index = (index + 1) % testimonials.length;
    }, 2000); 
}


changeBorderColor();
updateTestimonial();
