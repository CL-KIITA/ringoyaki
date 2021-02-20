import {
  Box,
  Card,
  CardContent,
  Container,
  LinearProgress,
  Paper,
  SvgIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import original from "../data/original.json";
import translation from "../data/translation.json";
import appleIcon from "../icons/apple.svg";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  blue: {
    color: "#4ea5f9",
  },
  icon: {
    width: "1rem",
    height: "1rem",
    float: "left",
    margin: "0 0.2rem 0 0",
    position: "relative",
    top: "0.1rem",
  },
});

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}

export default function App() {
  const classes = useStyles();
  const apples = {
    language: translation.language,
    translations: translation.translations,
    originals: original.originals,
  };
  const rate =
    (apples.translations.filter((x) => x.translation !== "").length /
      apples.originals.length) *
    100;

  translation.translations.map((item: object) => console.log(item));
  return (
    <Container className="reactApp">
      <Typography variant="h4" component="h1">
        SCJ共通りんご文・
        <span className={classes.blue}>{apples.language}</span>
      </Typography>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={rate} />
        </Box>
        <Box minWidth={35}>
          <Typography
            variant="body2"
            color="textSecondary"
          >{`翻訳率 ${Math.round(rate)}%`}</Typography>
        </Box>
      </Box>
      {apples.translations.map(
        (item: { id: String; translation: String; note?: String }) => {
          let original = apples.originals.find((x) => x.id == item.id);
          assertIsDefined(original);
          return item.translation !== "" ? (
            <div>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.id}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {item.translation}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {original.sentence}
                  </Typography>
                  {item.note != undefined && item.note !== "" ? (
                    <>
                      <img className={classes.icon} src={appleIcon} />
                      <Typography variant="body2" component="p">
                        {item.note}
                      </Typography>
                    </>
                  ) : (
                    ""
                  )}
                </CardContent>
              </Card>
            </div>
          ) : (
            ""
          );
        }
      )}
    </Container>
  );
}
