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
// Lerp function
function lerp(current, target, ease) {
  return current * (1 - ease) + target * ease;
}

// Animación con lerp
function animateWithLerp(
  targetElement,
  property,
  targetValue,
  ease,
  scrollTriggerConfig
) {
  let currentValue = parseFloat(getComputedStyle(targetElement)[property]) || 0;
  let finalTargetValue = targetValue;

  // Actualizar el valor objetivo basado en el scrollTrigger
  ScrollTrigger.create({
    ...scrollTriggerConfig,
    onUpdate: (self) => {
      finalTargetValue = self.progress * targetValue;
    },
  });

  // Animar manualmente usando GSAP ticker
  gsap.ticker.add(() => {
    currentValue = lerp(currentValue, finalTargetValue, ease);
    gsap.set(targetElement, { [property]: currentValue });
  });
}

// Aplicar animaciones con lerp
const bikeImage = document.querySelector(".bike-white");
animateWithLerp(bikeImage, "x", -150, 0.1, {
  trigger: bikeImage,
  start: "top 80%",
  end: "top 20%",
  scrub: true,
});

const componentsImage = document.querySelector(".components-white");
animateWithLerp(componentsImage, "x", 150, 0.1, {
  trigger: componentsImage,
  start: "top 80%",
  end: "top 20%",
  scrub: true,
});

const cyclistBig = document.querySelector(".cyclist-big");
animateWithLerp(cyclistBig, "x", -200, 0.1, {
  trigger: cyclistBig,
  start: "top 80%",
  end: "top 20%",
  scrub: true,
});

const cyclistSmall = document.querySelector(".cyclist-small");
animateWithLerp(cyclistSmall, "x", 200, 0.1, {
  trigger: cyclistSmall,
  start: "top 80%",
  end: "top 20%",
  scrub: true,
});
