import { Card, CardContent, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import original from "../data/original.json";
import translation from "../data/translation.json";

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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
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

  translation.translations.map((item: object) => console.log(item));
  return (
    <Container className="reactApp">
      <h1>SCJ共通りんご文・<span className={classes.blue}>{apples.language}</span></h1>
      {apples.translations.map((item: { id: String; translation: String }) => {
        let original = apples.originals.find((x) => x.id == item.id);
        assertIsDefined(original);
        return item.translation !== "" ? (
          <div>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {item.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.translation}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {original.sentence}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ) : (
          ""
        );
      })}
    </Container >
  );
}
