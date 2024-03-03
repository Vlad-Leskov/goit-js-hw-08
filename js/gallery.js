const images = [
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczOO7mcxtOCAs67NxpRrHpFEdgmUcORupo7_HheoQIdLn1IgysKT4LxEIzOGHWpqJxNBZz209uNoAEhU9rvXCz6TlyiFJVmqUZb8tXRdwAsnTjpZ2jaWe-JMYhbkxDetpdH3Se1z-gE_Est4L0kJVhdoxA=w979-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczOO7mcxtOCAs67NxpRrHpFEdgmUcORupo7_HheoQIdLn1IgysKT4LxEIzOGHWpqJxNBZz209uNoAEhU9rvXCz6TlyiFJVmqUZb8tXRdwAsnTjpZ2jaWe-JMYhbkxDetpdH3Se1z-gE_Est4L0kJVhdoxA=w979-h1305-s-no-gm?authuser=0',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczOwwGFUG5xuKBZK3l6C6SS1tUI0BfkV4FjvSXxlAqrsm5iL4Yx1rlOemd0wR5udSey4UAsY7Sb9mDN5bGF_YgCnWUYVsv3atRBPubi2MKKxdQ0D2B99zJay6Xayr5SxghPLeNd_hukHN7b94gYn1T8IwQ=w1740-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczOwwGFUG5xuKBZK3l6C6SS1tUI0BfkV4FjvSXxlAqrsm5iL4Yx1rlOemd0wR5udSey4UAsY7Sb9mDN5bGF_YgCnWUYVsv3atRBPubi2MKKxdQ0D2B99zJay6Xayr5SxghPLeNd_hukHN7b94gYn1T8IwQ=w1740-h1305-s-no-gm?authuser=0',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczMFLbkzdLMOstBQUeAhHdz40kzl8geB7X--PItrvhicqbmYTVlaI6EJsSGNASdCfKjqJ1ttIDT6C1HhMTzEOG1KbciJFCNNyjqWQCmlkCsnia7rQ1PwitC5okG5iRM7hrzn12Nte8QyoV6Z_nlVj4-7oQ=w979-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczMFLbkzdLMOstBQUeAhHdz40kzl8geB7X--PItrvhicqbmYTVlaI6EJsSGNASdCfKjqJ1ttIDT6C1HhMTzEOG1KbciJFCNNyjqWQCmlkCsnia7rQ1PwitC5okG5iRM7hrzn12Nte8QyoV6Z_nlVj4-7oQ=w979-h1305-s-no-gm?authuser=0',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczPT5PcpnMreJtYt5lx1hbZhRZ7p1_xm_ksjAd55I6J6inDkZlqp1mhqVJIfta7ZoXaFkXUxlnqn9n-K6M0umMFReGwZ7Owc-1hHyR4FPBFyKg285cuNw9c53SZSa-7bvY16HB7UeJcxrDz10WDWvfhg_Q=w1740-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczPT5PcpnMreJtYt5lx1hbZhRZ7p1_xm_ksjAd55I6J6inDkZlqp1mhqVJIfta7ZoXaFkXUxlnqn9n-K6M0umMFReGwZ7Owc-1hHyR4FPBFyKg285cuNw9c53SZSa-7bvY16HB7UeJcxrDz10WDWvfhg_Q=w1740-h1305-s-no-gm?authuser=0',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczPcjyaB6g6gDFGlB82IqsPgmcpPluEyybWfu2my7br-taYq7ZbuNnTnQzHd9BpTIMhTNLYPjTFubVTctVTdICN33mV1VhblPPqHJkEJ-XASx02guzVR5cLKlelO1Yxw5ObQkKHj6cmVQALi4dhdREz5OA=w1740-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczPcjyaB6g6gDFGlB82IqsPgmcpPluEyybWfu2my7br-taYq7ZbuNnTnQzHd9BpTIMhTNLYPjTFubVTctVTdICN33mV1VhblPPqHJkEJ-XASx02guzVR5cLKlelO1Yxw5ObQkKHj6cmVQALi4dhdREz5OA=w1740-h1305-s-no-gm?authuser=0',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczMlfHob5WdycgQPMFcZ7lxXgHrZUYaILQicnaN7ms_CDBOpLjxqYGGzlklw41bZS1w25piS7dxpWoXGKiJIWp2i32aXgW4SOE5pF8fQXErrG7KndT-AtBNPoevKv7sY8SHcq0hpl4re31_gJ6LxdSujqA=w979-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczMlfHob5WdycgQPMFcZ7lxXgHrZUYaILQicnaN7ms_CDBOpLjxqYGGzlklw41bZS1w25piS7dxpWoXGKiJIWp2i32aXgW4SOE5pF8fQXErrG7KndT-AtBNPoevKv7sY8SHcq0hpl4re31_gJ6LxdSujqA=w979-h1305-s-no-gm?authuser=0',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczMosjdvO2Ch76whwCIue6mvq1SxePiYUA8wq3QnOcDVBG7jmEvStCMtF8lM3BGdp-0iRLx7HJrlScLOTvS5GNOe32EV_GWv5UG4k9ODZcnbJLgXu4HtJk_u9GigjmWufu91it3gMakpmeVb1B9dRncxZA=w979-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczMosjdvO2Ch76whwCIue6mvq1SxePiYUA8wq3QnOcDVBG7jmEvStCMtF8lM3BGdp-0iRLx7HJrlScLOTvS5GNOe32EV_GWv5UG4k9ODZcnbJLgXu4HtJk_u9GigjmWufu91it3gMakpmeVb1B9dRncxZA=w979-h1305-s-no-gm?authuser=0',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczNO5ziIlr8c5ZcoNxI8WL1NC9GY8XWnPFIyIk9tgaTmx2BzG8JSz9BJqNN_K5iwpGepqQYR8C1fpY9Vlc43hTjsgzHSG9-cufkQUW2aykSzFxPyktmGBMtPln_lW0yHEu3orglcjIEmNqfhWg2ASPxmCA=w979-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczNO5ziIlr8c5ZcoNxI8WL1NC9GY8XWnPFIyIk9tgaTmx2BzG8JSz9BJqNN_K5iwpGepqQYR8C1fpY9Vlc43hTjsgzHSG9-cufkQUW2aykSzFxPyktmGBMtPln_lW0yHEu3orglcjIEmNqfhWg2ASPxmCA=w979-h1305-s-no-gm?authuser=0',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://lh3.googleusercontent.com/pw/AP1GczO9aKOHELjnHK3kk2KoQ_E4-PRvDEgk48UPINca9OJpe90xQOx5BmltheDb9Jh2ei_oH3qKUGNXuBPuADzajEHN8GLyCEsaEAHaLD7_vkqwqN11aUXtsmVhVBe5omrmr8RpjwvE1YeFudicsMbtveh1aQ=w1740-h1305-s-no-gm?authuser=0',
    original:
      'https://lh3.googleusercontent.com/pw/AP1GczO9aKOHELjnHK3kk2KoQ_E4-PRvDEgk48UPINca9OJpe90xQOx5BmltheDb9Jh2ei_oH3qKUGNXuBPuADzajEHN8GLyCEsaEAHaLD7_vkqwqN11aUXtsmVhVBe5omrmr8RpjwvE1YeFudicsMbtveh1aQ=w1740-h1305-s-no-gm?authuser=0',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

const galleryItems = images
  .map(
    ({ preview, original, description }) =>
      `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItems);

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.currentTarget === event.target) {
    return;
  }

  const largeImageUrl = event.target.dataset.source;

  basicLightbox.create(`<img src="${largeImageUrl}">`).show();
});
