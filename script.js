const replies = {
  returns: { greeting: 'Hi there,', text: 'Thanks for reaching out! We’re happy to help with a return. You can bring your item by the shop within 30 days, or reply here with your order number and we’ll walk you through the next step.', signoff: 'See you soon,<br />The shop team' },
  sizing: { greeting: 'Hi there,', text: 'Happy to help you find the right fit. Let us know which piece you’re looking at and how you like things to fit, and we’ll send over the measurements and our best recommendation.', signoff: 'Talk soon,<br />The shop team' },
  hours: { greeting: 'Hi there,', text: 'Thanks for checking in! Our current hours are listed on our website and Instagram, where we also post any changes for holidays or special events. We hope to see you in the shop soon.', signoff: 'See you soon,<br />The shop team' }
};

document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.question').forEach(option => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    const reply = replies[button.dataset.reply];
    document.querySelector('#reply-greeting').textContent = reply.greeting;
    document.querySelector('#reply-text').textContent = reply.text;
    document.querySelector('#reply-signoff').innerHTML = reply.signoff;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
