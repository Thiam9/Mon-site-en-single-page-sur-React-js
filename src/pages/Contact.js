import React from 'react';
import Navigation from '../components/Navigation';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <section id="team" class="pb-5">
            <div className="container-fluid cont">

            <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className=" img-fluid myPhoto" src="media/diaHaxor.jpg" alt="card image" />
                                           <h4 className="card-title">Mamadou Dia</h4>
                                           <p class="card-text">DEVELOPPEUR JAVA TECH LEAD </p>
                                           <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" className="btn btn-primary btn-sm">
                                           <i className="fab fa-angellist"></i>
                                           </a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Mamadou Dia</h4>
                                           <p className="card-text2">Tech Lead, plus dans les langages Java et Scala, adepte du TDD/DDD et tout ce qui rapporte aux bonnes pratiques dans le monde du dev plus un penchant pour le monde de la programmation fonctionnelle. </p>
                                           <ul className="list-inline">

                                           <li class="list-inline-item">
                                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/mamadou-dia-b0418a6b/">
                                                        <i class="fab fa-linkedin myIcon"></i>
                                                    </a>
                                                </li>
                                               

                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>

                   <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className=" img-fluid myPhoto" src="media/toure.jpg" alt="card image" />
                                           <h4 className="card-title">Toure Mouhamed</h4>
                                           <p class="card-text">DATA ENGINEER  DATA SCIENTIST </p>
                                           <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" className="btn btn-secondary btn-sm"><i className="fa fa-check-square-o"></i></a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Toure Mouhamed</h4>
                                           <p className="card-text2">Ingenieur Big Data, a l'aise avec le langage Scala ainsi que Apache Spark, je suis intéressé par tout ce qui est lié a l'IA et machine Learning. </p>
                                           <ul className="list-inline">

                                    
                                           <li class="list-inline-item">
                                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/mohamed-el-bechir-toure-346b20157/">
                                                        <i class="fab fa-linkedin myIcon"></i>
                                                    </a>
                                                </li>

                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>

                   <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className=" img-fluid myPhoto" src="media/lamineBa.jpg" alt="card image" />
                                           <h4 className="card-title">Lamine Ba</h4>
                                           <p class="card-text">CLOUD DEVOPS ENGINEER  PYTHON <br/>SOFTWARE ENGINEER </p>
                                           <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" className="btn btn-success btn-sm"><i className="fa fa-check-square-o"></i></a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Lamine Ba</h4>
                                           <p className="card-text2">Ingenieur en informatique de formation, de plus en plus orienté vers le devops, le cloud avec aws, du coté du dev plus sur le backend avec Python. </p>
                                           <ul className="list-inline">

                                    
                                           <li class="list-inline-item">
                                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/lamine-ba-828b29b2/">
                                                        <i class="fab fa-linkedin myIcon"></i>
                                                    </a>
                                                </li>

                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>
                   
               
               <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className=" img-fluid myPhoto" src="media/youssoufDia.jpg" alt="card image" />
                                           <h4 className="card-title">Youssouf Dia</h4>
                                           <p class="card-text">DEVOPS - SOFWARE ENGINEER AWS <br/> SOLUTION ARCHITECT </p>
                                           <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" className="btn btn-primary btn-sm">
                                           <i className="fab fa-angellist"></i>
                                           </a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Youssouf Dia</h4>
                                           <p className="card-text2">Ingenieur en informatique de formation, de plus en plus orienté vers le devops, le cloud avec aws, du coté du dev plus sur le backend avec Java. </p>
                                           <ul className="list-inline">

                                    
                                           <li class="list-inline-item">
                                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/youssouf-dia-9945b84b/">
                                                        <i class="fab fa-linkedin myIcon"></i>
                                                    </a>
                                                </li>

                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>
                   <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className=" img-fluid myPhoto" src="media/lo.jpg" alt="card image" />
                                           <h4 className="card-title">Cheikhna Lo</h4>
                                           <p class="card-text">DEVELOPPEUR FULL STACK JAVA WEB <br/>AND MOBILE </p>
                                           <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" className="btn btn-warning btn-sm"><i className="fa fa-check-square-o"></i></a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Cheikhna Lo</h4>
                                           <p className="card-text2">I’ve always sought out opportunities and challenges that are meaningful to me. As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven
                                                work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company. </p>
                                           <ul className="list-inline">

                                    
                                           <li class="list-inline-item">
                                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/cheikhna-lo-349984123/">
                                                        <i class="fab fa-linkedin myIcon"></i>
                                                    </a>
                                                </li>


                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>
                   

                   <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className="img-fluid myPhoto" src="media/thiam1.jfif" alt="card image" />
                                           <h4 className="card-title">Ibrahim Thiam</h4>
                                           <p class="card-text">DÉVELOPPEUR WEB FULL STACK JS <br/> REACT </p>
                                           <a href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/" className="btn btn-dark btn-sm">
                                           <i className="fab fa-angellist"></i>
                                           </a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Ibrahim Thiam</h4>
                                           <p className="card-text2">Developpeur web passionné par les nouvelles technologies liées au développement web. J'ai fais mes premiers pas en tant qu'autodidacte, aujourd'hui je developpe des applications web lisses et ultras rapide avec
                                               React et React native. </p>
                                           <ul className="list-inline">

                                    
                                               <li className="list-inline-item">
                                                   <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/ibrahima-thiam-047b0314b/">
                                                       <i className="fab fa-linkedin myIcon"></i>
                                                   </a>
                                               </li>
                                               

                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>

                   <div className="row carte">
                   <div className="col-sm-12">
                       <div className="image-flip">
                           <div className="mainflip flip-0">
                               <div className="frontside">
                                   <div className="card">
                                       <div className="card-body text-center">
                                           <img className=" img-fluid myPhoto" src="media/soka.jfif" alt="card image" />
                                           <h4 className="card-title">Cheick Oumar Thiam</h4>
                                           <p class="card-text">Étudiant Math-Informatique<br/>Recherche Alternance </p>
                                           <a href="https://www.linkedin.com/in/cheick-oumar-thiam-3a87901b2/" className="btn btn-warning btn-sm"><i className="fa fa-check-square-o"></i></a>
                                       </div>
                                   </div>
                               </div>
                               <div className="backside">
                                   <div className="card">
                                       <div className="card-body text-center mt-4">
                                           <h4 className="card-title">Cheick Oumar Thiam</h4>
                                           <p className="card-text2">Bonjour à tous, étudiant en deuxiéme année licence Math-Informatique, je suis à la recherche d’une alternance et j’apprécierais votre soutien. Merci d’avance pour toutes les mises en relation, tous les conseils ou les opportunités que vous pouvez offrir. #OpenToWork. </p>
                                           <ul className="list-inline">

                                    
                                           <li class="list-inline-item">
                                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/cheikhna-lo-349984123/">
                                                        <i class="fab fa-linkedin myIcon"></i>
                                                    </a>
                                                </li>


                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>
                   </div>
                   </section>
                   
        </div>
    );
};

export default Contact;