import React from 'react'

const Contact = () => {
       return (
              <div className="sec__one">
                    <table width="30%" align="center">
	<tr>
		<td><h1 align="center">Comuníquese con nosotros</h1></td>
	</tr>
	<tr align="center">
		<td>
		<fieldset>
			<legend>Contactenos</legend>
			<label>Nombre</label><br/>
			<input type="text" name="">
			<br/><br/>
			<label>Apellidos</label>
			<br/>
			<input type="text" name="">
			<br/><br/>
			<label>Email</label>
			<br/>
			<input type="Email" name="">
			<br/><br/>
			<label>Teléfono</label>
			<br/>
			<input type="text" name="">
			<br/><br/>
			<input type="submit" value="Enviar" name="">
		</fieldset>		
		</td>
	</tr>
	
</table>
<table align="center" width="40%">
	<tr>
		<td>
			<br/><br/>
			Dirección Jornada Fin de Semana
			<br/>
			Edificio "T", oficina T-420
			<br/>
			PBX: 2411 1800 ext. 1190
			<br/>
			Lunes a sábado de 08:00 a 15:00 horas
		</td>
		<td>
			<br/><br/>
			Dirección Jornada Matutina
			<br/>
			Edificio "I"
			<br/>
			PBX: 2411 1800 ext. 1357
			<br/>
			Lunes a viernes de 07:00 a 15:00 horas
		</td>
	</tr>
</table>
              </div>
       )
}

export default Contact
