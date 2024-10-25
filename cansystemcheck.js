document.getElementById("run-diagnostic").addEventListener("click", function() {
    setTimeout(() => {
        document.getElementById("internet-status").innerText = "Pass";
        document.getElementById("internet-status").classList.remove("pending");
        document.getElementById("internet-status").classList.add("pass");
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("camera-status").innerText = "Pass";
        document.getElementById("camera-status").classList.remove("pending");
        document.getElementById("camera-status").classList.add("pass");
    }, 1500);
    
    setTimeout(() => {
        document.getElementById("microphone-status").innerText = "Fail";
        document.getElementById("microphone-status").classList.remove("pending");
        document.getElementById("microphone-status").classList.add("fail");
    }, 2000);
});
