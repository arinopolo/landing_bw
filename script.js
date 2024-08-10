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
