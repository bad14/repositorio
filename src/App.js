import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [text, setText] = useState('');

	// De forma similar a componentDidMount y componentDidUpdate
	useEffect(() => {
	},[]);
  	return (
		<div class="mx-auto">
			<section id="home" >		
				<div class="wrapper" id="particles-js">
					<div class="card w-100 bg-base-100 shadow-xl">
						<figure class="px-10 pt-2">
							<div class="avatar" style={{'width':'300px', 'height':'300px'}}>
								<div class="w-50 mask mask-hexagon">
									<img src="profile-pic.jpg" />
								</div>
							</div>
						</figure>
						<div class="card-body items-center text-center">
							<div class="typing-demo">
							<h2 class="card-title pb-1 text-xl">Rigoberto Martínez 👋 </h2>
							</div>
							<h2 className="text-lg font-black">Desarrollador web  📌 Veracruz, México</h2>
							<div class="flex space-x-5 mt-2 items-center content-center">
								<a rel="noopener" class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition" href="mailto:rigohvz14@gmail.com"><svg class="text-violet-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
								
								<a rel="noopener" class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition" href="https://www.linkedin.com/in/rigoberto-martinez-971a76206/"><svg  class="text-violet-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
								<a rel="noopener" class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition" href="https://github.com/bad14"><svg class="text-violet-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
								
								<a rel="noopener" class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition" href="https://twitter.com/bad14x"><svg class="text-violet-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>

								<a rel="noopener" target="_blank" class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition" href="https://api.whatsapp.com/send?phone=+522221083261&text=Hola,%20vengo%20de%20tu%20portafolio%20online."><svg style={{"fill":"#8b5cf6"}} class="text-violet-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

								
							</div>
							<div className="intro_tech">
								<span className='item_tech_prof text-lg'>ReactJS</span>
								<span className='item_tech_prof text-lg'>NextJS</span>
								<span className='item_tech_prof text-lg'>SEO</span>
								<span className='item_tech_prof text-lg'>Linux</span>
							</div>
							<div class="card-actions pt-2">
							<a href="#info">
								<div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
								<svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
								</svg>
								</div>
							</a>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			<section id="info" className="container mx-auto px-4 text-white">
				<h3 className="text-lg pt-10 font-black">
					🧍Acerca de mí:
				</h3>
				<h3 className="text-lg">
					Ingeniero en informática por la <a href="http://www.uppuebla.edu.mx/joomla1/" target="_blank">Universidad Politécnica de Puebla</a>, con más de 5 años de experiencia trabajando en desarrollo web, en su mayoría enfocado en periodismo, de los cuales 4 años he sido programador y uno coordinador de departamento de desarrollo.

				</h3>
				<h3 className="text-lg pt-12 font-black">
					💼 Experiencia
				</h3>
				<div class="overflow-x-auto w-full">
					<table class="table w-full">
						<thead>
						<tr>
							<th>
							</th>
							<th>Empresa</th>
							<th>Tareas</th>
						</tr>
						</thead>
						<tbody>
						
						<tr>
							<th>
							</th>
							<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img src="jobomas.png" alt="Avatar Tailwind CSS Component" />
								</div>
								</div>
								<div>
								<div class="font-bold">Jobomas.com</div>
								<span class="badge badge-ghost badge-sm">Auxiliar de sistemas</span>
								</div>
							</div>
							</td>
							<td>
								<ul class="list-disc">
									<li>Monitoreo de servidores Linux (CentOS 6/7) con plataforma Nagios.</li>
									<li>Scripts en Bash para monitoreo y respaldo automatico de bases de datos.</li>
									<li>Administración de redes con ZeroShell.</li>
								</ul>
							</td>
						</tr>

						<tr>
							<th>
							</th>
							<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img src="e-consulta.jpg" alt="Avatar Tailwind CSS Component" />
								</div>
								</div>
								<div>
								<div class="font-bold">e-consulta.com</div>
								<span class="badge badge-ghost badge-sm">Programador web</span>
								</div>
							</div>
							</td>
							<td>
								<ul class="list-disc">
									<li>Desarrollo y mantenimiento de portales web en framework Codeigniter 3.</li>
									<li>Administración de servidores Linux (Centos 6/7).</li>
									<li>Desarrollo de portales sobre Wordpress.</li>
								</ul>
							</td>
						</tr>

						<tr>
							<th>
							</th>
							<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img src="crediland.jpg" alt="Avatar Tailwind CSS Component" />
								</div>
								</div>
								<div>
								<div class="font-bold">Crediland </div>
								<span class="badge badge-ghost badge-sm">Programador</span>
								</div>
							</div>
							</td>
							<td>
								<ul class="list-disc">
									<li>Desarrollo y mantenimiento de portales web en PHP.</li>
									<li>Mantenimiento de modulos en Pascal sobre entorno Delphi.</li>
									<li>Programación en Python para monitoreo de bases de datos y equipos en red.</li>
								</ul>
							</td>
						</tr>

						<tr>
							<th>
							</th>
							<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img src="e-consulta.jpg" alt="Avatar Tailwind CSS Component" />
								</div>
								</div>
								<div>
								<div class="font-bold">e-consulta.com</div>
								<span class="badge badge-ghost badge-sm">Coordinador de desarrollo</span>
								</div>
							</div>
							</td>
							<td>
								<ul class="list-disc">
									<li>Coordinación de desarrollo web.</li>
									<li>Administración de servidores Linux (Centos 6/7).</li>
									<li>Planeación, implementación y administración de infraestructura web en Digitalocean. </li>
									<li>mplementación, administración de anuncios en Admanager.</li>
									<li>Creación y mantenimiento de respaldos automaticos de bases de datos.</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th>
							</th>
							<td>
							<div class="flex items-center space-x-3">
								
								<div>
								<div class="font-bold">Proyectos varios</div>
								<span class="badge badge-ghost badge-sm">Freelancer</span>
								</div>
							</div>
							</td>
							<td>
								<ul class="list-disc">
									<li>Desarrollo de portales periodisticos.</li>
									<li>Optimización de sitios web.</li>
									<li>Desarrollo de sitios informativos.</li>
									<li>Asesorías SEO.</li>
									<li>Migraciones de sitios.</li>
									<li>Creación/Integración de Woocommerce.</li>
								</ul>
							</td>
						</tr>

						</tbody>
						
						
					</table>
				</div>
				<div className="flex flex-col">
					<h3 className="text-lg pt-12 font-black">
						👨🏻‍💻Lenguajes
					</h3>
					<div className="intro_tech h-10">
						<span className='item_tech_prof text-lg'>PHP</span>
						<span className='item_tech_prof text-lg'>Javascript</span>
						<span className='item_tech_prof text-lg'>BASH</span>
						<span className='item_tech_prof text-lg'>Python</span>
					</div>
				</div>
				<div className="flex flex-col">
					<h3 className="text-lg pt-12 font-black">
						🛠Tecnologías
					</h3>
					<div className="intro_tech pb-10 h-10">
						<span className='item_tech_prof text-lg'>Linux</span>
						<span className='item_tech_prof text-lg'>MySQL</span>
						<span className='item_tech_prof text-lg'>Android</span>
						<span className='item_tech_prof text-lg'>Google Admanager</span>
						<span className='item_tech_prof text-lg'>HTML</span>
						<span className='item_tech_prof text-lg'>CSS</span>
						<span className='item_tech_prof text-lg'>JQuery</span>
						<span className='item_tech_prof text-lg'>ReactJS</span>
						<span className='item_tech_prof text-lg'>NextJS</span>
						<span className='item_tech_prof text-lg'>Wordpress</span>
						<span className='item_tech_prof text-lg'>Woocommerce</span>
						<span className='item_tech_prof text-lg'>Codeigniter</span>
						<span className='item_tech_prof text-lg'>Apache</span>
						<span className='item_tech_prof text-lg'>Nginx</span>
					</div>
				</div>
				<div className="flex flex-col pt-12">
					<h3 className="text-lg pt-12 font-black">
						🛠Cursos
					</h3>
					<div className="intro_tech h-10">
						<span className='item_tech_prof text-lg'><a href="https://drive.google.com/file/d/1Jz5OLJtnkJiFvySoUOgU2z79n5ubDth3/view?usp=sharing">UDEMY REAC + FIREBASE.pdf</a></span>
						<span className='item_tech_prof text-lg'><a href="https://drive.google.com/file/d/18LzsljKaTE-JcNXFeSit758KddnjidCT/view?usp=sharing">Drive Advertising Revenue with Google Ad Manager</a></span>
						<span className='item_tech_prof text-lg'>CCNA R&S: Routing and Switchings</span>
						<span className='item_tech_prof text-lg'>Complete Linux Training Course to Get Your Dream IT Job 2021</span>
					</div>
				</div>
			</section>
			<section id="tecnologias"  className="mt-5 mb-10 container mx-auto px-4 text-white">
				<h3 className="text-lg pt-20 pb-10 font-black">
					🌐Sitios desarrollados

				</h3>
				
				<div class="grid grid-cols-3 gap-3">
					<div className="flex flex-col items-center shrink-0">
						<p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							<a href="https://www.e-consulta.com">e-consulta</a> | NextJS 
						</p>
						<div class="mockup-phone">
							<div class="camera"></div> 
							<div class="display">
								<div class="artboard artboard-demo phone-1">
									<img src="site-econsulta.JPG" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center shrink-0">
						<p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							<a href="https://m.municipiospuebla.mx">MunicipiosPuebla</a> | NextJS 
						</p>
						<div class="mockup-phone">
							<div class="camera"></div> 
							<div class="display">
								<div class="artboard artboard-demo phone-1">
									<img src="municipios.JPG" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center shrink-0">
						<p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							<a href="https://esferaspedagogicas.org/">Esferas Pedagógicas</a> | CODEIGNITER 
						</p>
						<div class="mockup-phone">
							<div class="camera"></div> 
							<div class="display">
								<div class="artboard artboard-demo phone-1">
									<img src="esferas.JPG" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-3 gap-3 pt-10">
					<div className="flex flex-col items-center shrink-0">
						<p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							<a href="https://mundonuestro.mx/">Mundo Nuestro</a> | CODEIGNITER 
						</p>
						<div class="mockup-phone">
							<div class="camera"></div> 
							<div class="display">
								<div class="artboard artboard-demo phone-1">
									<img src="mundonuestro.JPG" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center shrink-0">
						<p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							<a href="http://sepuebla.com.mx/">Sé Puebla</a> | CODEIGNITER 
						</p>
						<div class="mockup-phone">
							<div class="camera"></div> 
							<div class="display">
								<div class="artboard artboard-demo phone-1">
									<img src="sepuebla.JPG" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center shrink-0">
						<p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							<a href="http://conlosojosabiertos.org.mx/">Con los ojos abiertos</a> | CODEIGNITER 
						</p>
						<div class="mockup-phone">
							<div class="camera"></div> 
							<div class="display">
								<div class="artboard artboard-demo phone-1">
									<img src="conlosojos.JPG" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</section>
			<div className='text-center text-lg pt-12 font-black'>
				© 2022 Rigoberto Martínez
			</div>
		</div>	
  );
}

export default App;
