var validation = document.getElementById('bouton_envoi');
var firstname = document.getElementById('name');
var nameFalse =document.getElementById('error_name');
var name_validate = /^[a-zA-Z-éèêîÉÈÊËÍÌÎ][a-zéèêàçî]+([-'\s][a-zA-Z-éèêîÉÈÊËÍÌÎ][a-zéèêàçî]+)?/;

var lastname = document.getElementById('lastname');
var error_lastname= document.getElementById('error_lastname');
var prenom_validate = /^[a-zA-Z-éèêîÉÈÊËÍÌÎ][a-zéèêàçî]+([-'\s][a-zA-Z-éèêîÉÈÊËÍÌÎ][a-zéèêàçî]+)?/;


validation.addEventListener('click', f_valid);

function f_valid (e){
	e.preventDefault();
	if (firstname.validity.valueMissing){
		error_name.textContent = 'veuillez remplir le champ par votre nom';
		error_name.style.color ='red';
	}else if (name_validate.test(firstname.value) == false) {
		nameFalse.textContent = 'format incorrect';
		nameFalse.style.color = 'orange';
	}else if (lastname.validity.valueMissing){
		error_lastname.textContent = 'Prenom manquant';
		error_lastname.style.color ='red';
	}else if (prenom_validate.test(lastname.value) == false) {
		error_lastname.textContent = 'format incorrect';
		error_lastname.style.color = 'orange';
	}
}


