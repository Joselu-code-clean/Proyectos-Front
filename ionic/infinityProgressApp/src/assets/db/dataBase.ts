
// Nuestra base de datos estara compuesta por 3 arrays que seran los niveles de intensidad.
export const PRINCIPIANTE = [
    //routine: es un array que contendra los ejercicios y el tiempo total de la rutina
        {
            nameCategory: "cardio",
            routines: [
                // fav: Si la rutina esta marcada como favorita.
                // currentExercise: Ejercicio actual guardado de la rutina
                // currentExercisefAV: Ejercicio actual guardado de la rutina favorita.
                // totalTime: el tiempo total que dura la rutina
                // nameRoutine: nombre de la rutina = ID
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                    // exercise: coleccion que contendra la lista de ejercicios
                    //name: nombre del ejercicio
                    //time: nombre del ejercicio
                    //attemps: nombre del ejercicio
                    //repeats: nombre del ejercicio
                    //kcal: nombre del ejercicio
                    //GIF: nombre del ejercicio
                        {
                            name: "Jumping Jack", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "jumping-jack.gif", 
                        },
                        {
                            name: "Half Burpees", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "half-burpees.gif", 
                        },
                        {
                            name: "Correr en el Sitio", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "correr-en-el-sitio.gif", 
                        },
                        {
                            name: "Mountain Climber", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "mountain-climbers.gif", 
                        },
                        {
                            name: "Zancadas con elevacion de rodillas", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "zancadas.gif", 
                        }
                    ],
                    // totalTime: el tiempo total de la rutina se calculara luego
                    totalTime: Number,
                    nameRoutine: "Inicio en Cardio"
                },
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                    // exercise: coleccion que contendra la lista de ejercicios
                    //name: nombre del ejercicio
                    //time: nombre del ejercicio
                    //attemps: nombre del ejercicio
                    //repeats: nombre del ejercicio
                    //kcal: nombre del ejercicio
                    //GIF: nombre del ejercicio
                        {
                            name: "Jumping Jack", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "jumping-jack.gif", 
                        },
                        {
                            name: "Half Burpees", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "half-burpees.gif", 
                        },
                        {
                            name: "Correr en el Sitio", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "correr-en-el-sitio.gif", 
                        },
                        {
                            name: "Mountain Climber", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "mountain-climbers.gif", 
                        },
                        {
                            name: "Zancadas con elevacion de rodillas", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "zancadas.gif", 
                        }
                    ],
                    // totalTime: el tiempo total de la rutina se calculara luego
                    totalTime: Number,
                    nameRoutine: "La Prueba en Cardio"
                }
            ]
            
        },
        {
            nameCategory: "core",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Plancha Basica", 
                            time: 20, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-basica.jpg", 
                        },
                        {
                            name: "Plancha lateral basica", 
                            time: 20, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-lateral.jpg", 
                        },
                        {
                            name: "Crunch lumbar", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "crunch-lumbar.gif", 
                        },
                        {
                            name: "Flutter Kicks", 
                            time: 20, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flutter-kicks.gif", 
                        },
                        {
                            name: "Russian Twists", 
                            time: 20, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "russian-twists.gif", 
                        },
                        {
                            name: "Isometrico Crunch", 
                            time: 15, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "crunch-isometrico.jpg", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Inicio en Core"
                }
            ]
        
        },
        {
            nameCategory: "fullBody",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Flexiones rodillas en el suelo", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-rodillas.gif", 
                        },
                        {
                            name: "Australian pull ups", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-ups.gif", 
                        },
                        {
                            name: "Sentadillas 90º", 
                            time: 0, 
                            attemps: 12,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas.gif", 
                        },
                        {
                            name: "Fondos en banco", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "fondos-banco.gif", 
                        },
                        {
                            name: "Australian supino", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-up-supino.gif", 
                        },
                        {
                            name: "Puente femoral", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "puente-femoral.gif", 
                        },
                        {
                            name: "Elevaciones de gemelos", 
                            time: 0, 
                            attemps: 20,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "elevaciones-gemelos.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Inicio en Full Body"
                }
            ]

        },
        {
            nameCategory: "trenSuperior",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Flexiones rodillas en el suelo", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-rodillas.gif", 
                        },
                        {
                            name: "Australian pull ups", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-ups.gif", 
                        },
                        {
                            name: "Fondos en banco", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "fondos-banco.gif", 
                        },
                        {
                            name: "Australian supino", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-up-supino.gif", 
                        },
                        {
                            name: "Flexiones inclinadas", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-inclinadas.gif", 
                        },
                        {
                            name: "Australian con agarre neutro", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-up-neutro.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Inicio en Tren Superior"
                }
            ]
            
            

        },
        {
            nameCategory: "trenInferior",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Sentadillas", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas.gif", 
                        },
                        {
                            name: "Zancadas con cada pierna", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "zancadas.gif", 
                        },
                        {
                            name: "Puente femoral", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "puente-femoral.gif", 
                        },
                        {
                            name: "Elevacion de gemelos", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "elevaciones-gemelos.gif", 
                        },
                        {
                            name: "Sentadillas isometricas", 
                            time: 15, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-isometricas.gif", 
                        },
                        {
                            name: "Zancadas laterales", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "zancadas-laterales.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Inicio en Tren Inferior"
                }
            ]
        }
];

// Nuestra base de datos estara compuesta por 3 arrays que seran los niveles de intensidad.
export const INTERMEDIO = [
    //routine: es un array que contendra los ejercicios y el tiempo total de la rutina
        {
            nameCategory: "cardio",
            // exercise: coleccion que contendra la lista de ejercicios
                //name: nombre del ejercicio
                //time: nombre del ejercicio
                //attemps: nombre del ejercicio
                //repeats: nombre del ejercicio
                //kcal: nombre del ejercicio
                //GIF: nombre del ejercicio
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Trote moderado", 
                            time: 300, 
                            attemps: 0,
                            repeats: 0, 
                            kcal: 0, 
                            GIF: "correr-en-el-sitio.gif", 
                        },
                        {
                            name: "Burpees", 
                            time: 0, 
                            attemps: 25,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "burpees.gif", 
                        },
                        {
                            name: "Sprint", 
                            time: 10, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sprint.gif", 
                        },
                        {
                            name: "Jumping Jack", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "jumping-jack.gif", 
                        },
                        {
                            name: "Mountain climbers", 
                            time: 0, 
                            attemps: 40,
                            repeats: 3, 
                            kcal: 0, 
                                GIF: "mountain-climbers.gif", 
                        }
                    ],
                    // totalTime: el tiempo total de la rutina se calculara luego
                    totalTime: Number,
                    nameRoutine: "Cardio AllTime"
                }
            ]
        
        },
        {
            nameCategory: "core",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Plancha Basica", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-basica.jpg", 
                        },
                        {
                            name: "Plancha lateral basica", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-lateral.jpg", 
                        },
                        {
                            name: "Crunch lumbar", 
                            time: 0, 
                            attemps: 15,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "crunch-lumbar.gif", 
                        },
                        {
                            name: "Flutter Kicks", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flutter-kicks.gif", 
                        },
                        {
                            name: "Russian Twists", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "russian-twists.gif", 
                        },
                        {
                            name: "Isometrico Crunch", 
                            time: 20, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "crunch-isometrico.jpg", 
                        },
                        {
                            name: "Crunch inverso", 
                            time: 0, 
                            attemps: 15,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "crunch-inverso.gif", 
                        },
                        {
                            name: "Isometrico lumbar", 
                            time: 20, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "isometrico-lumbar.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Siempre Core"
                }
            ]
        },
        {
            nameCategory: "fullBody",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Flexiones", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones.gif", 
                        },
                        {
                            name: "Dominadas", 
                            time: 0, 
                            attemps: 6,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "dominadas.gif", 
                        },
                        {
                            name: "Sentadillas", 
                            time: 0, 
                            attemps: 15,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "sentadillas.gif", 
                        },
                        {
                            name: "Fondos en paralela", 
                            time: 0, 
                            attemps: 5,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "fondo-paralelas.gif", 
                        },
                        {
                            name: "Australian pull up supino", 
                            time: 0, 
                            attemps: 12,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-up-supino.gif", 
                        },
                        {
                            name: "Puente femoral unilateral", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "puente-femoral-unilateral.gif", 
                        },
                        {
                            name: "Gemelos unilateral", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "elevaciones-gemelos.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Lo mejor del Full Body"
                }
            ]

        },
        {
            nameCategory: "trenSuperior",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Flexiones", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones.gif", 
                        },
                        {
                            name: "Dominadas", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "dominadas.gif", 
                        },
                        {
                            name: "Fondos en banco", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "fondos-banco.gif", 
                        },
                        {
                            name: "Australian pull up", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "australian-pull-up-supino.gif", 
                        },
                        {
                            name: "Flexiones declinadas", 
                            time: 0, 
                            attemps: 5,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-declinadas.gif", 
                        },
                        {
                            name: "Dominadas supina", 
                            time: 0, 
                            attemps: 6,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "dominadas-supina.gif", 
                        },
                        {
                            name: "Flexiones en pica", 
                            time: 0, 
                            attemps: 6,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-en-pica.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Arriba esos cuerpos"
                }
            ]

        },
        {
            nameCategory: "trenInferior",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Sentadillas con salto", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-con-salto.gif", 
                        },
                        {
                            name: "Zancadas laterales", 
                            time: 0, 
                            attemps: 15,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "zancadas-laterales.gif", 
                        },
                        {
                            name: "Puente femoral unilateral", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "puente-femoral-unilateral.gif", 
                        },
                        {
                            name: "Sentadillas", 
                            time: 0, 
                            attemps: 15,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "sentadillas.gif", 
                        },
                        {
                            name: "Zancadas unilaterales", 
                            time: 0, 
                            attemps: 20,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "zancadas.gif", 
                        },
                        {
                            name: "Elevacion de gemelos", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "elevaciones-gemelos.gif", 
                        },
                        {
                            name: "Extension de cadera unilateral", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "extension-de-cadera.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Piernas de Toro"
                }
            ]
        }
];

// Nuestra base de datos estara compuesta por 3 arrays que seran los niveles de intensidad.
export const AVANZADO = [
    //routine: es un array que contendra los ejercicios y el tiempo total de la rutina
        {
            nameCategory: "cardio",
            // exercise: coleccion que contendra la lista de ejercicios
                //name: nombre del ejercicio
                //time: nombre del ejercicio
                //attemps: nombre del ejercicio
                //repeats: nombre del ejercicio
                //kcal: nombre del ejercicio
                //GIF: nombre del ejercicio
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Trote moderado", 
                            time: 300, 
                            attemps: 0,
                            repeats: 0, 
                            kcal: 0, 
                            GIF: "correr-en-el-sitio.gif", 
                        },
                        {
                            name: "Burpees", 
                            time: 0, 
                            attemps: 30,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "burpees.gif", 
                        },
                        {
                            name: "Sprint", 
                            time: 10, 
                            attemps: 0,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "sprint.gif", 
                        },
                        {
                            name: "Jumping Jack", 
                            time: 60, 
                            attemps: 0,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "jumping-jack.gif", 
                        },
                        {
                            name: "Mountain climbers", 
                            time: 0, 
                            attemps: 40,
                            repeats: 4, 
                            kcal: 0, 
                                GIF: "mountain-climbers.gif", 
                        },
                        {
                            name: "Sentadillas explosivas", 
                            time: 0, 
                            attemps: 20,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-explosivas.gif", 
                        }
                    ],
                    // totalTime: el tiempo total de la rutina se calculara luego
                    totalTime: Number,
                    nameRoutine: "Usain Bold"
                        }
                    ]
        },
        {
            nameCategory: "core",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Plancha Basica", 
                            time: 40, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-basica.jpg", 
                        },
                        {
                            name: "Plancha lateral basica", 
                            time: 40, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-lateral.jpg", 
                        },
                        {
                            name: "Crunch lumbar", 
                            time: 0, 
                            attemps: 20,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "crunch-lumbar.gif", 
                        },
                        {
                            name: "Flutter Kicks", 
                            time: 50, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flutter-kicks.gif", 
                        },
                        {
                            name: "Russian Twists", 
                            time: 40, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "russian-twists.gif", 
                        },
                        {
                            name: "Isometrico Crunch", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "crunch-isometrico.jpg", 
                        },
                        {
                            name: "Crunch inverso", 
                            time: 0, 
                            attemps: 25,
                            repeats: 4, 
                            kcal: 0, 
                            GIF: "crunch-inverso.gif", 
                        },
                        {
                            name: "Isometrico lumbar", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "isometrico-lumbar.gif", 
                        },
                        {
                            name: "V sit raises", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "v-sit-raises.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "¡¡Fuerte al Nucleo!!"
                }
            ]

        },
        {
            nameCategory: "fullBody",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Flexiones explosivas", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-explosivas.gif", 
                        },
                        {
                            name: "Muscle up", 
                            time: 0, 
                            attemps: 5,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "muscle-up.gif", 
                        },
                        {
                            name: "Sentadillas con salto", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-con-salto.gif", 
                        },
                        {
                            name: "Handstand push up asistidas", 
                            time: 0, 
                            attemps: 6,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "handstand-pushup-asistida.gif", 
                        },
                        {
                            name: "Dominadas arqueras unilateral", 
                            time: 0, 
                            attemps: 3,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "dominadas-arqueras.gif", 
                        },
                        {
                            name: "Pistols squats asistidas", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "pistols-squats-asistidas.gif", 
                        },
                        {
                            name: "L sit toes to bar", 
                            time: 0, 
                            attemps: 5,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "l-sit-toes-to-bar.gif", 
                        },
                        {
                            name: "Plancha avanzada", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-avanzada.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "¡A tope!"
                }
            ]
        },
        {
            nameCategory: "trenSuperior",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Muscle up", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "muscle-up.gif", 
                        },
                        {
                            name: "Dominadas explosivas", 
                            time: 0, 
                            attemps: 5,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "dominadas.gif", 
                        },
                        {
                            name: "Fondos en barra", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "fondo-paralelas.gif", 
                        },
                        {
                            name: "Plancha isometrica", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-isometrica.gif", 
                        },
                        {
                            name: "Flexiones declinadas", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "flexiones-declinadas.gif", 
                        },
                        {
                            name: "Dominadas supina", 
                            time: 0, 
                            attemps: 12,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "dominadas-supina.gif", 
                        },
                        {
                            name: "Handstand push up asistidas", 
                            time: 0, 
                            attemps: 8,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "handstand-pushup-asistida.gif", 
                        },
                        {
                            name: "Plancha isometrica", 
                            time: 60, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "plancha-isometrica.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "Super-Saiyan"
                }
            ]
        },
        {
            nameCategory: "trenInferior",
            routines: [
                {
                    fav: false,
                    currentExercise: 0,
                    currentExerciseFav: 0,
                    exercises:[
                        {
                            name: "Sentadillas con salto", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-con-salto.gif", 
                        },
                        {
                            name: "Zancadas explosivas unilateral", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "zancadas-explosivas.gif", 
                        },
                        {
                            name: "Puente femoral unilateral", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "puente-femoral-unilateral.gif", 
                        },
                        {
                            name: "Elevaciones de gemelos", 
                            time: 0, 
                            attemps: 15,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "elevaciones-gemelos.gif", 
                        },
                        {
                            name: "Pistols squats asistidas", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "pistols-squats-asistidas.gif", 
                        },
                        {
                            name: "Sentadilla burgara unilateral", 
                            time: 0, 
                            attemps: 10,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-bulgaras.gif", 
                        },
                        {
                            name: "Sentadillas isometricas", 
                            time: 30, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas-isometricas.gif", 
                        },
                        {
                            name: "Sentadillas", 
                            time: 10, 
                            attemps: 0,
                            repeats: 3, 
                            kcal: 0, 
                            GIF: "sentadillas.gif", 
                        }
                    ],
                    totalTime: Number,
                    nameRoutine: "¡Fast And Furius!"
                }
            ]
        }
];