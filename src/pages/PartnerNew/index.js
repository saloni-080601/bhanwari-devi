import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import useStyles from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

function NewPartner() {
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  return (
    <Container maxWidth="lg">
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" gutterBottom>
          Our Partners
        </Typography>
        <hr color="primary" className={classes.partnerHrline} />

        <Typography variant="body2" align="center" paragraph>
          Meraki has partnered with individual schools, NGOs and state
          governments to provide students from low income families a step in the
          door of tech industry. Do you work with students that want to explore
          the world of programming? If so, look no further.
        </Typography>
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            className={!isActive ? classes.partnerBtn : classes.partnerBtn1}
          >
            <Link
              //to={PATHS.AFE}
              className={classes.linkForButton}
            >
              Join as a Partner
            </Link>
          </Button>
        </Grid>
      </Container>

      <Container
        className={
          !isActive ? classes.partnerContainer : classes.partnerContainer1
        }
      >
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src="https://www.linkfluence.com/hs-fs/hubfs/Amazon%20FMCG.jpg?width=689&name=Amazon%20FMCG.jpg"
              alt="Amazon box Robot"
              className={classes.partnerImg}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={1}>
              <Stack direction="row">
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    borderRadius: { xs: 25, sm: 15 },
                    height: { xs: 34, sm: 25 },
                  }}
                  size="small"
                >
                  <Link to={PATHS.AFE} className={classes.link2}>
                    featured
                  </Link>
                </Button>
              </Stack>
              <Typography variant="subtitle1" gutterBottom>
                Amazon Future Engineer
              </Typography>
              <Typography variant="body2" paragraph>
                Amazon Future Engineer is a complete package of
                childhood-to-career program aimed at increasing access to
                computer science education for children and young adults from
                underserved and underrepresented communities. Amazon has
                partnered with Meraki to further our cause.
              </Typography>
              <Link
                to={PATHS.AFE}
                underline="hover"
                color="primary"
                align={!isActive ? "left" : "center"}
                className={classes.link}
              >
                Learn More
                <ChevronRightOutlinedIcon className={classes.partnerIcon} />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="h5" align="center">
        Partners List
        <hr color="primary" className={classes.partnerHrline} />
      </Typography>
    </Container>
  );
}

export default NewPartner;
