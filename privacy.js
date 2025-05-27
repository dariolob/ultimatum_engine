// This code is for the privacy policy modal

document.addEventListener('DOMContentLoaded', function() {
            var modal = document.getElementById("privacyPolicyModal");
            var link = document.getElementById("privacy");
            var span = document.getElementsByClassName("close")[0];

            link.onclick = function(event) {
                event.preventDefault();
                modal.style.display = "block";
            }

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });