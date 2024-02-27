function toggleHandler(radioId) {
  if (radioId.id === "Radiobtn1") {
        //if the first radio is selected hide 2nd and 3rd
    document.getElementById("show-bottom1").classList.toggle("show");
    document.getElementById("content1").classList.toggle("show-selected-border") 

    document.getElementById("show-bottom2").classList.remove("show");
    document.getElementById("content2").classList.remove("show-selected-border")    

    document.getElementById("show-bottom3").classList.remove("show");
    document.getElementById("content3").classList.remove("show-selected-border")    

} else if (radioId.id === "Radiobtn2") {
        //if the second radio is selected hide 1st  and 3rd
    document.getElementById("show-bottom1").classList.remove("show");
    document.getElementById("content1").classList.remove("show-selected-border") 

    document.getElementById("show-bottom2").classList.toggle("show");
    document.getElementById("content2").classList.toggle("show-selected-border")    

    document.getElementById("show-bottom3").classList.remove("show");
    document.getElementById("content3").classList.remove("show-selected-border")    

  } else if (radioId.id === "Radiobtn3") {
        //if the third radio is selected hide 2nd and 1st
    document.getElementById("show-bottom1").classList.remove("show");
    document.getElementById("content1").classList.remove("show-selected-border")    

    document.getElementById("show-bottom2").classList.remove("show");
    document.getElementById("content2").classList.remove("show-selected-border")    

    document.getElementById("show-bottom3").classList.toggle("show");
    document.getElementById("content3").classList.toggle("show-selected-border")    

  }
}
