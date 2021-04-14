import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import EuroIcon from '@material-ui/icons/Euro';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#F7F7F7',
    marginTop: 50,
    borderTop: '1px solid #DDDDDD',
    paddingTop: 50,
    paddingLeft: 80,
    listStyle: 'none',
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item sm={3}>
          <div className="footer">
              <h3 className="footer__title">
                  A Propos
              </h3>
              <ul>
                  <li className="footer__lien"><a href="/">Fonctionnement d'Airbnb</a></li>
                  <li className="footer__lien"><a href="/">Newsroom</a></li>
                  <li className="footer__lien"><a href="/">Investisseurs</a></li>
                  <li className="footer__lien"><a href="/">Airbnb Plus</a></li>
                  <li className="footer__lien"><a href="/">Airbnb Luxe</a></li>
                  <li className="footer__lien"><a href="/">HotelTonight</a></li>
                  <li className="footer__lien"><a href="/">Airbnb for Work</a></li>
                  <li className="footer__lien"><a href="/">C'est possible,grâce aux hôtes</a></li>
                  <li className="footer__lien"><a href="/">Carrières</a></li>
                  <li className="footer__lien"><a href="/">Lettre des fondateurs</a></li>
              </ul>
          </div>
        </Grid>
        <Grid item sm={3}>
            <h3 className="footer__title">
                COMMUNAUTÉ
            </h3>
            <ul>
                <li className="footer__lien"><a href="/">Diversité et Intégration</a></li>
                <li className="footer__lien"><a href="/">Accessibilité</a></li>
                <li className="footer__lien"><a href="/">Partenaires Airbnb</a></li>
                <li className="footer__lien"><a href="/">Logements d'urgence</a></li>
                <li className="footer__lien"><a href="/">Parrainage de voyageurs</a></li>
                <li className="footer__lien"><a href="/">Airbnb.org</a></li>
            </ul>
        </Grid>
        <Grid item sm={3}>
            <h3 className="footer__title">
            HÔTE
            </h3>
            <ul>
                <li className="footer__lien"><a href="/">Héberger des voyageurs</a></li>
                <li className="footer__lien"><a href="/">Organiser une expérience en ligne</a></li>
                <li className="footer__lien"><a href="/">Organiser une expérience</a></li>
                <li className="footer__lien"><a href="/">Accueil responsable</a></li>
                <li className="footer__lien"><a href="/">Centre de ressources</a></li>
                <li className="footer__lien"><a href="/">Community Center</a></li>
            </ul>
        </Grid>
        <Grid item sm={3}>
            <h3 className="footer__title">
            ASSISTANCE
            </h3>
            <ul>
                <li className="footer__lien"><a href="/">Nos mesures face au COVID-19</a></li>
                <li className="footer__lien"><a href="/">Centre d'aide</a></li>
                <li className="footer__lien"><a href="/">Options d'annulation</a></li>
                <li className="footer__lien"><a href="/">Service d'aide aux voisins</a></li>
                <li className="footer__lien"><a href="/">Confiance et sécurité</a></li>
            </ul>
        </Grid>
      </Grid>
      <div className="footer__bottom">  
          <div className="footer__left">
            © 2021 Airbnb, Inc.
            <span>·</span><a href="/">Confidentialité</a>
            <span>·</span><a href="/">Conditions générales</a>
            <span>·</span><a href="/">Plan du site</a>
            <span>·</span><a href="/">Fonctionnement du site</a>
            <span>·</span><a href="/">Infos sur l'entreprise</a>
          </div>
          <div className="footer__center">
            <div>
                <a href="/"><span><LanguageIcon /></span>Français (FR)</a>
            </div>  
            <div>
                <a href="http:/"><span><EuroIcon/ ></span>EUR</a>
            </div>
          </div>
          <div className="footer__right">
          
            <span><a href="/"><FacebookIcon color="#484848" /></a></span>
            <span><a href="/"><TwitterIcon /></a></span>
            <span><a href="/"><InstagramIcon/></a></span>
            
          </div>
      </div>
    </div>
  );
}
