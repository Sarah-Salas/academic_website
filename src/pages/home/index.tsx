import { Link } from "react-router";
import { Layout } from "../../layout";
import salasHeadshot from "../../assets/salas_pfp_asa.jpg";

import "./home.css";

export function Home() {
  return (
    <Layout>
      <div className="home-page-content">
        <div className="image-content">
          <img src={salasHeadshot} alt="Sarah Salas" />
        </div>
        <div className="text-content">
          <p>
            I am a PhD candidate in Sociology at the University of
            Wisconsin–Madison, affiliated with the{" "}
            <a href="https://www.cde.wisc.edu/" target="_blank">
              Center for Demography and Ecology
            </a>{" "}
            and the{" "}
            <a href="https://cdha.wisc.edu/" target="_blank">
              Center for Demography of Health and Aging
            </a>
            .
          </p>
          <p>
            My research interests are in health disparities, stress, and
            aging, with training in mixed methods and formal demography. My
            dissertation, <em>Place and Perceptions: How Stress, Place, and
            Migration Shape Health and Aging</em>, examines how stress
            patterns health and aging outcomes across racial and ethnic
            groups. Using data from the Health and Retirement Study, I show
            how regional context shapes the relationship between
            discrimination and self-rated health; using biomarker data from
            the Survey of the Health of Wisconsin and REWARD, I examine how
            different operationalizations of stress relate to epigenetic
            aging; and drawing on 32 Spanish-language interviews with older
            Latino immigrants in Wisconsin, I explore how migration history
            shapes the way people narrate their health and sense of place
            later in life.
          </p>
          <p>
            My work appears in collaborative publications in the{" "}
            <a href="https://doi-org.ezproxy.library.wisc.edu/10.1093/aje/kwae183" target="_blank">
              American Journal of Epidemiology
            </a>{" "}
            (2024) and{" "}
            <a href="https://doi-org.ezproxy.library.wisc.edu/10.1093/aje/kwad188" target="_blank">
              a second AJE paper
            </a>{" "}
            (2023) and the{" "}
            <a href="https://link.springer.com/article/10.1007/s40615-023-01782-4" target="_blank">
              Journal of Racial and Ethnic Health Disparities
            </a>
            . My current work is in preparation for submission to{" "}
            <em>Social Problems</em> and <em>The Journal of Gerontology: Social Sciences</em>.
          </p>
          <p>
            I am dedicated to demographic approaches to health disparities
            research that speak across disciplinary lines. I always strive
            to connect sociology, epidemiology, and gerontology in my line
            of research. My work has connected me with community organizers
            across Wisconsin and has impassioned me to make my own research
            accessible to the communities who provide invaluable
            information and beyond.
          </p>
          <p>
            Prior to graduate school, I majored in Chemistry at the
            University of Texas at Austin, where I first began thinking
            about how to integrate biological measures into social science
            research. As a research assistant for Dr. Su Yeong Kim and Dr.
            Aprile Benner, I collected interview and survey data alongside
            saliva, hair, and dried blood spot samples – an early,
            hands-on introduction to biomarker collection in human subjects
            research that continues to shape my approach today.
          </p>
          <p>
            You can see my CV{" "}
            <Link to="/cv">here</Link>
            . You can contact me at sssalas@wisc.edu.
          </p>
        </div>
      </div>
    </Layout>
  );
}