var validation = document.getElementById('bouton_envoi');
var name = document.getElementById('name');
var no_name =document.getElementById('no_name');

validation.addEventListener('clic', f_valid);

function f_valid (e){

	if (nom.valdity.valueMissing){
		e.preventDefault();
		no_name.textContent = 'Nom manquant';
		no_name.style.color ='red';
	}

}
