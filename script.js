const sections = {
  home: {
    label: '01 / HOME',
    heading: 'Make a good first impression.',
    text: 'Tell people who you are, what you do, and why they should choose you. A clear introduction and a strong photo can do a lot of the work.'
  },
  services: {
    label: '02 / SERVICES',
    heading: 'Show what you offer.',
    text: 'Give customers a straightforward look at your services or products, with enough detail to help them know whether you’re the right fit.'
  },
  contact: {
    label: '03 / CONTACT',
    heading: 'Make the next step easy.',
    text: 'Put your location, hours, phone number, email, or inquiry link where people can actually find them. No hunting through old social posts.'
  }
};

document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.question').forEach(option => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });

    const section = sections[button.dataset.section];
    document.querySelector('#preview-label').textContent = section.label;
    document.querySelector('#preview-heading').textContent = section.heading;
    document.querySelector('#preview-text').textContent = section.text;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
