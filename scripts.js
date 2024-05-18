//Made By Aleks DULDA 21360859025
function showTextBoxes(bitCount) {
  var textBoxContainer = document.getElementById("text-box-container");
  textBoxContainer.innerHTML = ""; // Önceki text boxları temizle

  // LSB etiketi 
  var lsbLabel = document.createElement("label");
  lsbLabel.textContent = "LSB";
  textBoxContainer.appendChild(lsbLabel);


  for (var i = 0; i < bitCount; i++) {
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("placeholder", (i + 1) + ".Bit");
    textBox.setAttribute("maxlength", "1"); // En fazla 1 karakter girişi yapılmasını sağlar
    textBox.setAttribute("oninput", "this.value=this.value.replace(/[^01]/g,'')"); // Sadece 0 veya 1 girişi sağlar
    textBoxContainer.appendChild(textBox);
  }
  // MSB etiketi 
  var msbLabel = document.createElement("label");
  msbLabel.textContent = "MSB";
  textBoxContainer.appendChild(msbLabel);

}


function kaydet() {
  var textInputs = document.querySelectorAll("#text-box-container input");
  var dataarray = [];

  // Tüm kutucukları kontrol et
  var emptyBoxExists = false;
  textInputs.forEach(function (input) {
    dataarray.push(input.value);
    if (input.value.trim() === "") {
      emptyBoxExists = true;
    }
  });

  if (emptyBoxExists) {
    alert("Please fill in all the boxes.");
    return;
  }

  console.log("Veri Dizisi:", dataarray);
  control(dataarray.length, dataarray);


}

function toFixedLengthBinary(number, length) {
  let binary = number.toString(2);
  while (binary.length < length) {
    binary = '0' + binary; // Önemli sıfırları ekle
  }
  return binary;
}

// XOR işlemi 
function xorBinaryStrings(a, b) {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    result += a[i] === b[i] ? '0' : '1'; // XOR işlemi
  }
  return result;
}

var prehamming = [];


function control(length, dataarray) {
  var bit_length;

  if (length === 4) {
    bit_length = 7;
  } else if (length === 8) {
    bit_length = 12;
  } else if (length === 16) {
    bit_length = 21;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  console.log("Belirlenen bit uzunluğu:", bit_length);

  var i = 0;
  var j = 0;
  var k = 0;

  for (i = 1; i < bit_length + 1; i++) {
    if (Math.pow(2, j) == i) {
      prehamming[(i - 1)] = 2;
      j++;
    } else {
      prehamming[(k + j)] = dataarray[k++];
    }
  }
  console.log(prehamming);

  let conbefex = [];
  var m = 0;
  var n = 0;

  for (m = 0; m < bit_length; m++) {
    if (prehamming[m] == 1) {
      n = (m + 1);
      let binary = toFixedLengthBinary(n, (bit_length - length)); 
      conbefex.push(binary);
    }
  }

  console.log(conbefex);

 
  let result = conbefex[0];
  for (let i = 1; i < conbefex.length; i++) {
    result = xorBinaryStrings(result, conbefex[i]);
  }

  console.log("XOR SONUCU:  " + result); 
  alert("Control Bits (MSB to LSB): " + result);
  console.log("PREHAMMİNG:  " + prehamming);


  control_yerlestir(prehamming, result);
  showTextBoxes1(length, prehamming);
}

function control_yerlestir(wcontrol, result) {

  var i = 0;
  var j = (result.length - 1);

  for (i = 0; i < wcontrol.length; i++) {

    if (wcontrol[i] == 2) {

      wcontrol[i] = result[j];
      j--

    }
    else
      continue;

  }
  console.log("Controller yerleştirildi: " + wcontrol);


}

function showTextBoxes1(bitCount, sonuc) {
  var textBoxContainer1 = document.getElementById("text-box-container1");
  textBoxContainer1.innerHTML = ""; // Önceki text boxları temizle

  var bit_length;

  if (bitCount === 4) {
    bit_length = 7;
  } else if (bitCount === 8) {
    bit_length = 12;
  } else if (bitCount === 16) {
    bit_length = 21;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  console.log("Belirlenen bit uzunluğu:", bit_length);

  // LSB etiketi 
  var lsbLabel = document.createElement("label");
  lsbLabel.textContent = "LSB";
  textBoxContainer1.appendChild(lsbLabel);
  var j = 0;
  for (var i = 0; i < bit_length; i++) {
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("placeholder", (i + 1) + ".Bit");
    textBox.setAttribute("maxlength", "1"); // En fazla 1 karakter girişi yapılmasını sağlar
    textBox.setAttribute("oninput", "this.value=this.value.replace(/[^01]/g,'')");
    if (i < sonuc.length) {
      textBox.value = sonuc[i]; 
    }

   

    if (Math.pow(2, j) == (i + 1)) {
      textBox.style.backgroundColor = "orange";
      j++;
    }

    textBoxContainer1.appendChild(textBox);
  }

  // MSB etiketi 
  var msbLabel = document.createElement("label");
  msbLabel.textContent = "MSB";
  textBoxContainer1.appendChild(msbLabel);
}
function showTextBoxes2(bitCount, sonuc) {
  var textBoxContainer2 = document.getElementById("text-box-container2");
  textBoxContainer2.innerHTML = ""; // Önceki text boxları temizle

  var bit_length;

  if (bitCount === 4) {
    bit_length = 7;
  } else if (bitCount === 8) {
    bit_length = 12;
  } else if (bitCount === 16) {
    bit_length = 21;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  console.log("Belirlenen bit uzunluğu:", bit_length);

  var readingresult = document.createElement("label");
  readingresult.textContent = "Reading Result:  ";
  textBoxContainer2.appendChild(readingresult);

  // LSB etiketi 
  var lsbLabel = document.createElement("label");
  lsbLabel.textContent = "LSB";
  textBoxContainer2.appendChild(lsbLabel);
  var j = 0;
  for (var i = 0; i < bit_length; i++) {
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("placeholder", (i + 1) + ".Bit");
    textBox.setAttribute("maxlength", "1"); // En fazla 1 karakter girişi yapılmasını sağlar
    textBox.setAttribute("oninput", "this.value=this.value.replace(/[^01]/g,'')"); 
    if (i < sonuc.length) {
      textBox.value = sonuc[i];
    }


    if (Math.pow(2, j) == (i + 1)) {
      textBox.style.backgroundColor = "orange";
      j++;
    }

    textBoxContainer2.appendChild(textBox);
  }

  // MSB etiketi 
  var msbLabel = document.createElement("label");
  msbLabel.textContent = "MSB";
  textBoxContainer2.appendChild(msbLabel);
}
function showTextBoxes3(bitCount, sonuc) {
  var textBoxContainer3 = document.getElementById("text-box-container3");
  textBoxContainer3.innerHTML = ""; // Önceki text boxları temizle


  var bit_length;

  if (bitCount === 4) {
    bit_length = 7;
  } else if (bitCount === 8) {
    bit_length = 12;
  } else if (bitCount === 16) {
    bit_length = 21;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  console.log("Belirlenen bit uzunluğu:", bit_length);

  var expectedvalue = document.createElement("label");
  expectedvalue.textContent = "Expected Value:  ";
  textBoxContainer3.appendChild(expectedvalue);

  // LSB etiketi 
  var lsbLabel = document.createElement("label");
  lsbLabel.textContent = "LSB";
  textBoxContainer3.appendChild(lsbLabel);
  var j = 0;
  for (var i = 0; i < bit_length; i++) {
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("placeholder", (i + 1) + ".Bit");
    textBox.setAttribute("maxlength", "1"); // En fazla 1 karakter girişi yapılmasını sağlar
    textBox.setAttribute("oninput", "this.value=this.value.replace(/[^01]/g,'')"); // Sadece 0 veya 1 girişi sağlar
    if (i < sonuc.length) {
      textBox.value = sonuc[i]; 
    }

  

    if (Math.pow(2, j) == (i + 1)) {
      textBox.style.backgroundColor = "orange";
      j++;
    }

    textBoxContainer3.appendChild(textBox);
  }

  // MSB etiketi 
  var msbLabel = document.createElement("label");
  msbLabel.textContent = "MSB";
  textBoxContainer3.appendChild(msbLabel);
}

var ddataaray1 = [];
var sonuc = [];
function checkthearray() {
  var textInputs1 = document.querySelectorAll("#text-box-container1 input");
  var dataarray1 = [];
  var uzunluk;
  // Tüm kutucukları kontrol et
  var emptyBoxExists = false;
  textInputs1.forEach(function (input) {
    dataarray1.push(input.value);
    if (input.value.trim() === "") {
      emptyBoxExists = true;
    }
  });

  if (emptyBoxExists) {
    alert("Please fill in all the boxes.");
    return;
  }

  if (dataarray1.length === 7) {
    uzunluk = 4;
  } else if (dataarray1.length === 12) {
    uzunluk = 8;
  } else if (dataarray1.length === 21) {
    uzunluk = 16;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  console.log("Veri Dizisi:", dataarray1);
  console.log("Orjinal Dizi:", prehamming);
  showTextBoxes2(uzunluk, dataarray1);
  showTextBoxes3(uzunluk, prehamming);

  ddataaray1 = dataarray1;
  sonuc.length = 0;

}

function isittrue() {



  console.log(ddataaray1);

  let tutindex = [];


  let uzunluk = 0;

  if (ddataaray1.length === 7) {
    uzunluk = 4;
  } else if (ddataaray1.length === 12) {
    uzunluk = 8;
  } else if (ddataaray1.length === 21) {
    uzunluk = 16;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  for (m = 0; m < ddataaray1.length; m++) {
    if (ddataaray1[m] == 1) {
      n = (m + 1);
      let binary1 = toFixedLengthBinary(n, (ddataaray1.length - uzunluk)); 
      tutindex.push(binary1);
    }
  }
  console.log("Binary: " + tutindex);

  sonuc = tutindex[0];
  for (let i = 1; i < tutindex.length; i++) {
    sonuc = xorBinaryStrings(sonuc, tutindex[i]);
  }

  console.log("Nihai XOR: ", sonuc);



  let hatalıindex = (binaryToDecimal(sonuc) - 1);

  console.log("Hatalı olan index: " + hatalıindex);

  if (hatalıindex == -1) {
    console.log("Dizi değiştirilmemiş")
  }
  else if (hatalıindex == 0 || hatalıindex == 1 || hatalıindex == 3 || hatalıindex == 7 || hatalıindex == 15) {
    console.log("Hata Control Bitinde Değiştirmeye gerek yok")
  }
  else {

    console.log(hatalıindex + ". indexteki biti invertle")

  }

  if (ddataaray1.length === 7) {
    uzunluk = 4;
  } else if (ddataaray1.length === 12) {
    uzunluk = 8;
  } else if (ddataaray1.length === 21) {
    uzunluk = 16;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }


  showTextBoxes4(uzunluk, ddataaray1, hatalıindex);


}
function showTextBoxes4(bitCount, sonuc, hatalıindex) {
  var textBoxContainer4 = document.getElementById("text-box-container4");
  textBoxContainer4.innerHTML = ""; // Önceki text boxları temizle

  var bit_length;

  if (bitCount === 4) {
    bit_length = 7;
  } else if (bitCount === 8) {
    bit_length = 12;
  } else if (bitCount === 16) {
    bit_length = 21;
  } else {
    console.log("Belirtilen uzunluk için bir bit uzunluğu tanımlanmamış.");
    return;
  }

  console.log("Belirlenen bit uzunluğu:", bit_length);

  // LSB etiketi 
  var lsbLabel = document.createElement("label");
  lsbLabel.textContent = "LSB";
  textBoxContainer4.appendChild(lsbLabel);
  var j = 0;
  var flag = false;
  for (var i = 0; i < bit_length; i++) {
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("placeholder", (i + 1) + ".Bit");
    textBox.setAttribute("maxlength", "1"); // En fazla 1 karakter girişi yapılmasını sağlar
    textBox.setAttribute("oninput", "this.value=this.value.replace(/[^01]/g,'')");

    if (i === hatalıindex) {
      if (!(hatalıindex == 0 || hatalıindex == 1 || hatalıindex == 3 || hatalıindex == 7 || hatalıindex == 15)) {

        if (sonuc[i] == 0) {
          textBox.value = 1;
        } else {
          textBox.value = 0;
        }
        textBox.style.backgroundColor = "red";
        alert("Bit "+ (hatalıindex + 1) +  " is incorrect. inverted.");
        flag = true;

      }
      else {
        textBox.value = sonuc[i];
        textBox.style.backgroundColor = "lightblue";
        alert("Bit "+ (hatalıindex + 1) +  " is the Control bit. No need to invert.");
        flag = true;
      }
    }
    else {
      textBox.value = sonuc[i];
      textBox.style.backgroundColor = "#bfe7c1";

    }






    textBoxContainer4.appendChild(textBox);
  }
  if (flag == false) {
    alert("All Bits are True.");
  }

  // MSB etiketi 
  var msbLabel = document.createElement("label");
  msbLabel.textContent = "MSB";
  textBoxContainer4.appendChild(msbLabel);
}







function binaryToDecimal(binaryString) {
  return parseInt(binaryString, 2);
}