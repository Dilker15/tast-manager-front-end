import { CardsTask } from '../components/CardsTask';
import '../styles/landing.css';

let names= ['Trabajo','Rutina Diaria','Personal','Educacion','Gastos']

export function Landing(){
    return (<>
        <section className="main-section">
            <h1>Task Management App - ToDo List</h1>
            <div className="flex-description">
                <div className="image-container">
                    <img src="toDo.png" alt="main-image" />
                </div>
                <div className="description-container">
                        <h4>Cada aspecto de tu trabajo,Cubierto</h4>
                        <p className='text-description'>Organiza tus tareas de manera rápida y eficiente con nuestra página de To-Do.
                        Agrega, edita y marca tus tareas con facilidad, manteniendo todo bajo control y aumentando tu productividad. 
                        Perfecto para gestionar tu rutina diaria, ya sea en el trabajo, la escuela o proyectos personales.
                        </p>
                </div>
            </div>
        </section>
        <div className="section-categories-container">
            <h5>Organiza Cada aspecto de tu Vida</h5>
            <div className="section-categories">
                {
                    names.map((item,index)=>{
                        return <CardsTask key={index} name_category={item}/>
                    })
                }
            </div>
            


        </div>
        <div className="logo-container">    {/** IT CAN BE A FOR WITH IMAGES OF BACKEND */}
            <div className="logo-item">
                <img src="LOGO1.png" alt="logo1" />
            </div>
            <div className="logo-item">
                <img src="NAMELOGO.png" alt="logo2" />
            </div>
            <div className="logo-item">
                <img src="LOGO3.png" alt="logo3" />
            </div>
            <div className="logo-item">
                <img src="LOGO4.png" alt="logo4" />
            </div>
        </div>
        <section className="footer-section">
            <div className="container-footer">
                <div className="footer-item">
                    <h6>Sobre Nosotros</h6>
                    <p>"Productos diseñados para cumplir tus expectativas,
                         combinando calidad y funcionalidad en cada detalle."
                    </p>
                </div>
                <div className="footer-item">
                    <h6>Productos</h6>
                    <p>"Productos diseñados para cumplir tus expectativas,
                         combinando calidad y funcionalidad en cada detalle."
                    </p>
                </div>
                <div className="footer-item">
                    <h6>Contactanos</h6>
                    <p>"Productos diseñados para cumplir tus expectativas,
                         combinando calidad y funcionalidad en cada detalle."
                    </p>

                </div>
            </div>
        </section>
        
    </>);
}