function marking() {
  counter = 0;
  
  if (document.getElementById('q1b').checked) {
    document.getElementById('feedback1').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback1').innerHTML='You got question 1 wrong';
  }
  
  if (document.getElementById('q2c').checked) {
    document.getElementById('feedback2').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback2').innerHTML='You got question 2 wrong';
  }
  
  if (document.getElementById('q3b').checked) {
    document.getElementById('feedback3').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback3').innerHTML='You got question 3 wrong';
  }
  
  if (document.getElementById('q4a').checked) {
    document.getElementById('feedback4').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback4').innerHTML='You got question 4 wrong';
  }
  
  if (document.getElementById('q5a').checked) {
    document.getElementById('feedback5').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback5').innerHTML='You got question 5 wrong';
  }
  
  if (document.getElementById('q6d').checked) {
    document.getElementById('feedback6').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback6').innerHTML='You got question 6 wrong';
  }
  
  if (document.getElementById('q7c').checked) {
    document.getElementById('feedback7').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback7').innerHTML='You got question 7 wrong';
  }
  
  if (document.getElementById('q8b').checked) {
    document.getElementById('feedback8').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback8').innerHTML='You got question 8 wrong';
  }
  
  if (document.getElementById('q9d').checked) {
    document.getElementById('feedback9').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback9').innerHTML='You got question 9 wrong';
  }
  
  if (document.getElementById('q10a').checked) {
    document.getElementById('feedback10').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback10').innerHTML='You got question 10 wrong';
  }
  
  if (document.getElementById('q11b').checked) {
    document.getElementById('feedback11').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback11').innerHTML='You got question 11 wrong';
  }
  
  if (document.getElementById('q12b').checked) {
    document.getElementById('feedback12').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback12').innerHTML='You got question 12 wrong';
  }
  
  if (document.getElementById('q13c').checked) {
    document.getElementById('feedback13').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback13').innerHTML='You got question 13 wrong';
  }
  
  if (document.getElementById('q14d').checked) {
    document.getElementById('feedback14').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback14').innerHTML='You got question 14 wrong';
  }
  
  if (document.getElementById('q15c').checked) {
    document.getElementById('feedback15').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback15').innerHTML='You got question 15 wrong';
  }
  
  if (document.getElementById('q16c').checked) {
    document.getElementById('feedback16').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback16').innerHTML='You got question 16 wrong';
  }
  
  if (document.getElementById('q17d').checked) {
    document.getElementById('feedback17').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback17').innerHTML='You got question 17 wrong';
  }
  
  if (document.getElementById('q18a').checked) {
    document.getElementById('feedback18').innerHTML='';
    counter++;
  } else {
    document.getElementById('feedback18').innerHTML='You got question 18 wrong';
  }
  document.getElementById('feedback').innerHTML='You got '+(counter)+' questions correct';
}
  