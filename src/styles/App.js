import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "'Maname', serif",
        "fontSize": 16
    },
    "h1": {
        "fontFamily": "'Maname', serif"
    },
    "h2": {
        "fontFamily": "'Maname', serif"
    },
    "h3": {
        "fontFamily": "'Maname', serif"
    },
    "h4": {
        "fontFamily": "'Maname', serif"
    },
    "h5": {
        "fontFamily": "'Maname', serif"
    },
    "h6": {
        "fontFamily": "'Maname', serif"
    },
    "p": {
        "fontFamily": "'Maname', serif"
    },
    "span": {
        "fontFamily": "'Maname', serif"
    },
    "font-details": {
        "paddingTop": 23,
        "paddingRight": 23,
        "paddingBottom": 23,
        "paddingLeft": 23
    },
    "font-title": {
        "fontSize": 1.2,
        "fontWeight": "300",
        "marginBottom": 0
    },
    "font-meta": {
        "display": "block",
        "fontSize": 0.8
    },
    "edit": {
        "overflow": "hidden",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "edit:focus": {
        "outline": "none"
    },
    "editsmall": {
        "fontSize": 1
    },
    "edit drag": {
        "opacity": 0,
        "float": "left",
        "fontSize": 0.6,
        "cursor": "pointer",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "edit react-resizable-handle": {
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "opacity": 0
    },
    "edit:hover drag": {
        "opacity": 1
    },
    "edit:hover react-resizable-handle": {
        "opacity": 1
    },
    "section-title": {
        "marginBottom": 0,
        "fontWeight": "300",
        "fontSize": 2.5
    },
    "title-meta": {
        "fontSize": 1.5,
        "marginBottom": 2,
        "display": "block"
    },
    "text": {
        "lineHeight": 1.7,
        "fontSize": 1
    },
    "pulledquote": {
        "lineHeight": 1.5,
        "display": "block",
        "float": "right",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 35,
        "marginBottom": 10,
        "marginLeft": 10,
        "width": "45%",
        "fontSize": 1.4,
        "textAlign": "left"
    }
});