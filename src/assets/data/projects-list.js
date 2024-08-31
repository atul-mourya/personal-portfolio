import blueprintOverview from './livspace/blueprint-overview.webp';
import blueprintContour from './livspace/blueprint-contour.webp';
import blueprintGif from './livspace/blueprint.gif';
import canvasCoverpage from './livspace/coverpage.png';
import canvasPage1 from './livspace/page1.png';
import canvasPage2 from './livspace/page2.png';
import canvasPage3 from './livspace/page3.png';
import visionPage4 from './livspace/page4.png';
import visionPage5 from './livspace/page5.png';
import visionPage6 from './livspace/page6.png';
import visionPage7 from './livspace/page7.png';
import spacecraftCoverimage1 from './spacecraft/coverimage1.PNG';
import spacecraftPage1 from './spacecraft/page1.png';
import spacecraftPage2 from './spacecraft/page2.png';
import spacecraftPage3 from './spacecraft/page3.png';
import spacecraftPage4 from './spacecraft/page4.png';
import spacecraftAp1 from './spacecraft/ap1.png';
import spacecraftAp2 from './spacecraft/ap2.png';
import spacecraftAp3 from './spacecraft/ap3.png';
import spacecraftAp4 from './spacecraft/ap4.png';
import izmoNissanProject from './izmo/nissan-project.webp';
import izmoPage3 from './izmo/page3.png';
import izmoPage5 from './izmo/page5.png';
import izmoPage4 from './izmo/page4.png';
import izmoEmporio2 from './izmo/Izmo-emporio2.webp';
import izmoEditor from './izmo/IzmoEditor.webp';
import izmoPage2 from './izmo/page2.png';
import izmoPage1 from './izmo/page1.png';
import cadAI from './CadAI.webp';
import dponicsCustomizer from './3Dponics-customizer.webp';
import masalaNerds from './masalanerds/MasalaNerds.webp';
import masalaNerdsP1 from './masalanerds/p1.png';
import masalaNerdsP2 from './masalanerds/p2.png';
import masalaNerdsP3 from './masalanerds/p3.png';
import rayTracer from './experimental/PathTracer/RayTracer.png';
import pathTracer1 from './experimental/PathTracer/PathTracer1.png';
import pathTracer2 from './experimental/PathTracer/PathTracer2.png';
import pathTracer3 from './experimental/PathTracer/PathTracer3.png';
import pathTracer4 from './experimental/PathTracer/PathTracer4.png';
import testDriveCover from './experimental/TestDriveDemo/TestDrive-cover.webp';
import testDrivePage1 from './experimental/TestDriveDemo/TestDrivePage1.webp';
import testDrivePage2 from './experimental/TestDriveDemo/TestDrivePage2.webp';
import speedometerDashboard from './experimental/Speedometer/speedometer-dashboard.webp';
import synechrone from './experimental/Synechrone/synechrone.webp';
import imageProcessing from './experimental/ImagePostprocessor/ImageProcessing.webp';
import oxbotica from './experimental/Oxbotica/Oxbotica.png';
import floorplanner1 from './experimental/FloorPlanner/floorplanner1.png';
import floorplanner2 from './experimental/FloorPlanner/floorplanner2.png';
import floorplanner3 from './experimental/FloorPlanner/floorplanner3.png';

export const data = [
  {
    title: "Blueprint - Parametric Design Tool",
    description: "is a 3d modeling tool that allows users to create parametric designs. The tool is built using WebGL and Three.js.",
    link: '',
    demo_video: "",
    images: [
      { image: blueprintGif, thumbnail: blueprintGif },
      { image: blueprintOverview, thumbnail: blueprintOverview },
      { image: blueprintContour, thumbnail: blueprintContour },
    ],
    isExperiment: false,
  },
  {
    title: "Canvas 3D Tool - 3D Interiors Design tool",
    description: "is a state-of-the-art software for 2D-floor planning, 3D room design, product visualization mgmt, drawing generation and boq generation tool — optimized for performance at scale",
    link: '',
    demo_video: "https://youtu.be/jxFh3JiLzmg?t=189",
    images: [
      { image: canvasCoverpage, thumbnail: canvasCoverpage },
      { image: canvasPage1, thumbnail: canvasPage1 },
      { image: canvasPage2, thumbnail: canvasPage2 },
      { image: canvasPage3, thumbnail: canvasPage3 },
    ],
    isExperiment: false,
  },
  {
    title: "Vision - Asset Platform for Canvas",
    description: "Asset Platform is a web application for managing Canvas assets. It has many modules related to asset management like a material library, texture library, model library and module builder.",
    link: '',
    demo_video: '',
    images: [
      { image: visionPage4, thumbnail: visionPage4 },
      { image: visionPage5, thumbnail: visionPage5 },
      { image: visionPage6, thumbnail: visionPage6 },
      { image: visionPage7, thumbnail: visionPage7 },
    ],
    isExperiment: false,
  },
  {
    title: "Spacecraft - 3D Interiors Design tool",
    description: "Spacecraft is a state-of-the-art software for 2D floor planning, 3D room design, virtual meetings, catalog/pricing mgmt & manufacturing automation — optimized for performance at scale",
    link: '',
    demo_video: "https://youtu.be/UgM6JvVBiuI",
    images: [
      { image: spacecraftCoverimage1, thumbnail: spacecraftCoverimage1 },
      { image: spacecraftPage1, thumbnail: spacecraftPage1 },
      { image: spacecraftPage2, thumbnail: spacecraftPage2 },
      { image: spacecraftPage3, thumbnail: spacecraftPage3 },
      { image: spacecraftPage4, thumbnail: spacecraftPage4 },
    ],
    isExperiment: false,
  },
  {
    title: "Asset Platform for Spacecraft",
    description: "Asset Platform is a web application for managing Spacecraft assets. It has many modules related to asset management like a material library, texture library, model library and module builder.",
    link: '',
    demo_video: '',
    images: [
      { image: spacecraftAp1, thumbnail: spacecraftAp1 },
      { image: spacecraftAp2, thumbnail: spacecraftAp2 },
      { image: spacecraftAp3, thumbnail: spacecraftAp3 },
      { image: spacecraftAp4, thumbnail: spacecraftAp4 },
    ],
    isExperiment: false,
  },
  {
    title: "Izmo Emporio",
    description: "A configurator tool made for Izmo, an automotive retail software provided. The tool allows the user to configure the car's features and colors, and then download a PDF with the configuration.",
    link: 'https://www.izmoemporio.com/demo-en-us.htm',
    images: [
      { image: izmoNissanProject, thumbnail: izmoNissanProject },
      { image: izmoPage3, thumbnail: izmoPage3 },
      { image: izmoPage5, thumbnail: izmoPage5 },
      { image: izmoPage4, thumbnail: izmoPage4 },
      { image: izmoEmporio2, thumbnail: izmoEmporio2 },
    ],
    isExperiment: false,
  },
  {
    title: "Izmo - CG Editor",
    description: "CG Editor is an asset editing and management tool for Izmo. The tool allows the user to upload, modify and manage assets, and make a centralized repository for all the assets. This is a modded version of Three.js editor.",
    link: 'https://3d.partsgorilla.com/editor/',
    images: [
      { image: izmoEditor, thumbnail: izmoEditor },
      { image: izmoPage2, thumbnail: izmoPage2 },
      { image: izmoPage1, thumbnail: izmoPage1 },
    ],
    isExperiment: false,
  },
  {
    title: "CAD.ai - 3D Viewer",
    description: "CAD.ai is a 3D CAD widget for visualizing CAD data in a web browser. The user can select from different materials, view mesh information, and view it in AR and VR.",
    link: 'https://atul-mourya.gitlab.io/cadai3dwidget/',
    images: [
      { image: cadAI, thumbnail: cadAI },
    ],
    isExperiment: false,
  },
  {
    title: "3Dponics - Part Builder",
    description: "This tool is a parametric design tool for 3DPonics. The tool allows the user to create a parametric design, modify existing parameters and create custom designs. These designs are created as templates for 3D printing. The tool also allows the user to compare prices of printing from different service providers.",
    link: 'https://atul-mourya.gitlab.io/3dponics-customizer/',
    images: [
      { image: dponicsCustomizer, thumbnail: dponicsCustomizer },
    ],
    isExperiment: false,
  },
  {
    title: "Dot Immersive - Wheel Customizer",
    description: "Dot Immersive is a 3D web application that allows users to customize wheels and tires. The application is built using WebGL and Three.js.",
    link: 'https://atul-mourya.github.io/Wheel-Customizer/',
    images: [
      { image: masalaNerds, thumbnail: masalaNerds },
      { image: masalaNerdsP1, thumbnail: masalaNerdsP1 },
      { image: masalaNerdsP2, thumbnail: masalaNerdsP2 },
      { image: masalaNerdsP3, thumbnail: masalaNerdsP3 },
    ],
    isExperiment: false,
  },
  {
    title: "Path Tracer",
    description: "An simple path tracer with glb file support",
    link: 'https://atul-mourya.github.io/RayTracing/',
    images: [
      { image: rayTracer, thumbnail: rayTracer },
      { image: pathTracer1, thumbnail: pathTracer1 },
      { image: pathTracer2, thumbnail: pathTracer2 },
      { image: pathTracer3, thumbnail: pathTracer3 },
      { image: pathTracer4, thumbnail: pathTracer4 },
    ],
    isExperiment: true,
  },
  {
    title: "Test Drive",
    description: "An experimental game demo for testing the game engine. The game engine is built using WebGL, Three.js, ammo.js, WebAssembly, etc",
    link: 'https://atul-mourya.github.io/TestDriveDemo/',
    images: [
      { image: testDriveCover, thumbnail: testDriveCover },
      { image: testDrivePage1, thumbnail: testDrivePage1 },
      { image: testDrivePage2, thumbnail: testDrivePage2 },
    ],
    isExperiment: true,
  },
  {
    title: "Speedometer",
    description: "An experimental speedometer dashboard for monitoring the speed of a vehicle. The dashboard is built using WebGL and Three.js.",
    link: 'https://atul-mourya.github.io/Speedometer/',
    images: [
      { image: speedometerDashboard, thumbnail: speedometerDashboard },
    ],
    isExperiment: true,
  },
  {
    title: "Synechrone",
    description: "An experimental data visualization tool build in 3D. The tool visualizes various incidental data from a data set, and creates a 3D representation of the data on a globe.",
    link: 'https://atul-mourya.github.io/datavisualizer/',
    images: [
      { image: synechrone, thumbnail: synechrone },
    ],
    isExperiment: true,
  },
  {
    title: "Image Editor",
    description: "An experimental image post-processing tool. The tool allows the user to apply various image processing techniques on an image and save the result.",
    link: 'https://atul-mourya.gitlab.io/imageprocessing/app/',
    images: [
      { image: imageProcessing, thumbnail: imageProcessing },
    ],
    isExperiment: true,
  },
  {
    title: "Room Generator",
    description: "An experimental room generator. The tool generates a custom room, templated rooms, etc and displays it on a canvas.",
    link: 'https://atul-mourya.github.io/floor-planner/',
    images: [
      { image: floorplanner1, thumbnail: floorplanner1 },
      { image: floorplanner2, thumbnail: floorplanner2 },
      { image: floorplanner3, thumbnail: floorplanner3 },
    ],
    isExperiment: true,
  },
  {
    title: "Autmonous Driving",
    description: "Autonomouse Vehicles live activity feed demo using three.js. This Experiment can be used to control autonomously driven vehicles.",
    link: 'https://atul-mourya.github.io/Oxbotica-experiment/',
    images: [
      { image: oxbotica, thumbnail: oxbotica },
    ],
    isExperiment: true,
  },
];