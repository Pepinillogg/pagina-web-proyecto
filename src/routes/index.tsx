import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prevención del Consumo de Drogas" },
      { name: "description", content: "Página informativa sobre la prevención del consumo de drogas en niños y adolescentes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <div className="hero" id="inicio">
        <h1>Prevención del Consumo de Drogas en Niños, Niñas y Adolescentes</h1>
        <p>
          Esta página fue creada para informar y concientizar sobre la importancia
          de prevenir el consumo de drogas desde edades tempranas.
        </p>
      </div>

      {/* INFORMACIÓN */}
      <div className="seccion" id="informacion">
        <h2>Información</h2>

        <h3>¿Qué causan las drogas en el cuerpo?</h3>
        <p>
          Las drogas afectan directamente el cerebro y el resto del cuerpo de niñas,
          niños y adolescentes, que aún están en pleno desarrollo. Pueden alterar la
          memoria, la concentración y el aprendizaje en la escuela, además de provocar
          cambios bruscos en el estado de ánimo, ansiedad, tristeza o agresividad.
        </p>
        <p>
          En el cuerpo pueden causar daños en el corazón, los pulmones, el hígado y
          los riñones, además de problemas para dormir, pérdida de apetito y debilidad
          general. A largo plazo, generan dependencia, es decir, la persona siente que
          ya no puede vivir sin la sustancia, lo que afecta su salud, sus relaciones
          familiares y su futuro.
        </p>

        <h3>¿Por qué inicia el consumo? Conoce las causas</h3>
        <p>
          El consumo en niñas, niños y adolescentes muchas veces inicia por curiosidad,
          por querer sentirse aceptados en un grupo de amigos o por imitar lo que ven
          en otras personas, en redes sociales o en la televisión. La presión social
          es una de las principales causas en esta etapa de la vida.
        </p>
        <p>
          También influyen problemas personales o familiares como la baja autoestima,
          la falta de comunicación en casa, sentirse solos, la violencia, el estrés
          escolar o vivir situaciones difíciles que no saben cómo manejar. Las drogas
          aparecen entonces como una forma equivocada de "escapar" de esos problemas.
        </p>

        <h3>¿Qué es la prevención?</h3>
        <p>
          La prevención son todas las acciones que se realizan para evitar que niñas,
          niños y adolescentes consuman drogas. Incluye la educación en la escuela y
          en la casa, la buena comunicación con la familia, la enseñanza de valores y
          el desarrollo de habilidades para tomar decisiones responsables.
        </p>
        <p>
          Prevenir también significa brindar información clara y verdadera sobre los
          riesgos del consumo, promover actividades sanas como el deporte, el arte y
          la lectura, y crear espacios de confianza donde los menores puedan hablar
          de lo que sienten sin miedo a ser juzgados. La prevención es tarea de la
          familia, la escuela y toda la sociedad.
        </p>

        <h3>Factores de riesgo</h3>
        <p>
          Existen varios factores que aumentan el riesgo de que niñas, niños y
          adolescentes consuman drogas: la falta de comunicación y afecto en la
          familia, la presión de los amigos, problemas emocionales como la ansiedad
          o la depresión, la baja autoestima y la curiosidad sin orientación adecuada.
        </p>
        <p>
          También influyen los entornos donde hay fácil acceso a las drogas, la
          violencia familiar o escolar, el bajo rendimiento académico, el abandono
          escolar y la falta de actividades recreativas. Conocer estos factores ayuda
          a la familia y a la escuela a estar atentos y actuar a tiempo.
        </p>

        <h3>Consejos para la familia</h3>
        <p>
          Hablar con los hijos sin juzgarlos, escucharlos con atención, pasar tiempo
          de calidad juntos, conocer a sus amigos, establecer reglas claras y dar el
          ejemplo con nuestras propias acciones. La familia es la primera y más
          importante red de apoyo para prevenir el consumo de drogas.
        </p>
        <p>
          También es importante estar atentos a cambios de comportamiento, fomentar
          la autoestima, apoyar sus estudios y sus pasatiempos, y buscar ayuda
          profesional si se detecta algún problema. Demostrar amor, confianza y
          presencia constante hace una gran diferencia en la vida de niñas, niños
          y adolescentes.
        </p>
      </div>

      {/* IMÁGENES */}
      <div className="fondo-gris">
        <div className="seccion" id="imagenes">
          <h2>Imágenes</h2>
          <div className="cards">
            <div className="card">
              <img
                src="https://static.guiainfantil.com/pictures/articulos/31-el-dialogo-en-la-familia.jpg"
                alt="Diálogo familiar"
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px" }}
              />
              <p><strong>Diálogo familiar</strong></p>
              <p>Hablar en familia previene riesgos.</p>
            </div>
            <div className="card">
              <img
                src="https://www.educapeques.com/wp-content/uploads/2015/09/maestro.jpg.webp"
                alt="Educación"
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px" }}
              />
              <p><strong>Educación</strong></p>
              <p>La escuela enseña valores y habilidades.</p>
            </div>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5RlWyoHf5Obg2hP4HPXtZrOmRoDsWWde9Q&s"
                alt="Deporte"
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px" }}
              />
              <p><strong>Deporte</strong></p>
              <p>Las actividades sanas protegen a los jóvenes.</p>
            </div>
            <div className="card">
              <img
                src="https://blog.smartcex.com/hubfs/BLOG%20-%20SMARTCEX_5julio.png"
                alt="Acompañamiento"
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px" }}
              />
              <p><strong>Acompañamiento</strong></p>
              <p>Estar presentes hace la diferencia.</p>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <div className="seccion" id="video">
        <h2>Video</h2>
        <p>Mira este video que explica el tema:</p>
        <div className="video-contenedor">
          <iframe
            src="https://www.youtube.com/embed/JndZ3y-KVLQ"
            title="Prevención del consumo de drogas"
            allowFullScreen
          />
        </div>
      </div>

      {/* RECURSOS */}
      <div className="fondo-gris">
        <div className="seccion recursos" id="recursos">
          <h2>Recursos y Líneas de Ayuda</h2>
          <p>Aquí hay enlaces a páginas oficiales donde puedes obtener más información:</p>
          <ul>
            <li><a href="https://www.who.int/es/health-topics/drugs-psychoactive" target="_blank" rel="noopener noreferrer">Organización Mundial de la Salud (OMS)</a></li>
            <li><a href="https://www.unodc.org/" target="_blank" rel="noopener noreferrer">UNODC - Oficina contra la Droga y el Delito</a></li>
            <li><a href="https://www.gob.mx/salud/conadic" target="_blank" rel="noopener noreferrer">CONADIC México</a></li>
            <li><a href="https://www.gob.mx/salud/conadic/acciones-y-programas/linea-de-la-vida" target="_blank" rel="noopener noreferrer">Línea de la Vida: 800 911 2000</a></li>
            <li><a href="https://www.unicef.org/es/salud-mental" target="_blank" rel="noopener noreferrer">UNICEF - Salud Mental</a></li>
            <li><a href="https://nida.nih.gov/es" target="_blank" rel="noopener noreferrer">NIDA - Instituto Nacional sobre el Abuso de Drogas</a></li>
          </ul>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer" id="creditos">
        <h2>Créditos</h2>
        <p><strong>Materia:</strong> Cultura Digital II</p>
        <p><strong>Integrantes del equipo:</strong></p>
        <ul>
          <li>Mildred Aimee Gutiérrez Cruz</li>
          <li>Inés Margarita Velásquez De Gante</li>
        </ul>
      </div>
    </div>
  );
}
