import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Form_Gaussjordan from '../Components_Linear/Form_Gaussjordan';


export default function Gaussjd(){
		  return (
			<div>
				<div className='Bisectionpages container-xxl'>
					<div>
						<div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75  p-3 shadow p-3 mb-5 bg-body rounded" >
						
						<center><h1>GaussJordan Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Form_Gaussjordan />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};