import React from 'react'

function About() {
  return (
	  <div className="fullflex">
		  
		<div className="bg-slate-100 flex flex-col p-2 border-2 border-slate-200 w-1/2 items-center justify-center my-5">
			<h1 className='text-5xl font-bold incon my-2'>About the School</h1>
			<p className='text-xl incon'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa maxime eligendi consequatur nesciunt recusandae sint repellendus commodi provident, in quaerat accusantium exercitationem aspernatur, dolorum ducimus modi itaque aut incidunt voluptatem.</p>
   		</div>

		  <iframe 
			  className='shadow-md rounded-lg'
			  width="50%"
			  height="600"
			  frameBorder="0"
			  scrolling="no"
			  marginHeight={ 0}
			  marginWidth={ 0}
			  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=M29W+534,%20Sothon,%20Mueang%20Chachoengsao%20District,%20Chachoengsao%2024000+(Intertots%20Trillingual%20Schoi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
			  <a href="https://www.gps.ie/sport-gps/">hiking gps</a>
		  </iframe>
	</div>
  )
}

export default About