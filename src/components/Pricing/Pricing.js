import { Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Card from "./Card";
import SwitchBtn from "./SwitchBtn";

const content = [
  {
    title: "Touriste",
    description: "1 journée",
    pricing: "15",
    features: ["Accès à l'espace de 8h30 à 19h", "Wifi très haut débit"],
  },
  {
    title: "De passage",
    description: "1 semaine",
    pricing: "45",
    features: ["Accès à l'espace de 8h30 à 19h", "Wifi très haut débit"],
  },
  {
    title: "Résident",
    description: "1 mois",
    extendedDesc: "3 mois",
    pricing: "150",
    extendedPricing: "410",
    features: [
      "Accès à l'espace 24/7",
      "Wifi très haut débit",
      "Accès à la salle privée",
      "Bureau dédié",
    ],
  },
  {
    title: "Startup",
    description: "1 mois",
    extendedDesc: "3 mois",
    pricing: "750",
    extendedPricing: "1950",
    features: [
      "Accès à l'espace 24/7",
      "Wifi très haut débit",
      "Accès à la salle privée",
      "Espace privé (jusqu'à 5 personnes)",
    ],
  },
];

const Pricing = () => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event) => {
    setChecked(!checked);
  };
  return (
    <SectionContainer title={"Nos tarifs"} id={"sectionTarifs"}>
      <Container maxWidth="lg">
        <SwitchBtn checked={checked} handleCheck={handleCheck} />
        <Grid container spacing={2}>
          {content.map((elem,k) => (
            <Grid key={k} item lg={3} md={4} sm={6} xs={12}>
              <Card
                checked={checked}
                title={elem.title}
                description={elem.description}
                pricing={elem.pricing}
                extendedPricing={elem.extendedPricing}
                extendedDesc={elem.extendedDesc}
                features={elem.features}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Pricing;
