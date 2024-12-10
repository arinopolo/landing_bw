document
  .getElementById("privacyPolicyLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var privacyPolicyModal = new bootstrap.Modal(
      document.getElementById("privacyPolicyModal")
    );
    privacyPolicyModal.show();
  });

document
  .getElementById("conditionsLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var conditionsModal = new bootstrap.Modal(
      document.getElementById("conditionsModal")
    );
    conditionsModal.show();
  });

gsap.registerPlugin(ScrollTrigger);

// Seleccionar la imagen
const bikeImage = document.querySelector(".bike-white");

gsap.to(bikeImage, {
  x: "-150px",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: bikeImage,
    start: "top 90%",
    end: "top 0%",
    scrub: 0.5,
  },
});

const componentsImage = document.querySelector(".components-white");

gsap.to(componentsImage, {
  x: "150px",
  rotation: 70,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: componentsImage,
    start: "top 90%",
    end: "top 0%",
    scrub: 0.5,
  },
});

const cyclistBig = document.querySelector(".cyclist-big");
const cyclistSmall = document.querySelector(".cyclist-small");

gsap.to(cyclistBig, {
  x: "-150px",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: cyclistBig,
    start: "top 90%",
    end: "top 0%",
    scrub: 0.5,
  },
});

gsap.to(cyclistSmall, {
  x: "150px",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: cyclistSmall,
    start: "top 90%",
    end: "top 0%",
    scrub: 0.5,
  },
});
