import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  private discos:Disco[] = [{
    "id": "0",
    "album": "Pablo Honey",
    "anio": "1993",
    "formato": "CD, CS, LP",
    "img": "assets/img/pablo-honey.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/Pablo_Honey",
    "descripcion": "Pablo Honey es el disco que vio nacer a Radiohead, una producción muy acorde al indie de la época. Canciones llenas de energía y guitarras, perfectamente se aprecia la emulación de un sonido grunge pero con toques singulares de la banda."
}, {
    "id": "1",
    "album": "The Bends",
    "anio": "1995",
    "formato": "CD, CS, LP, MD",
    "img": "assets/img/the-bends.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/The_Bends",
    "descripcion": "Después del medido éxito de Pablo Honey las cosas no podían ser del todo iguales. Radiohead, cuyo nombre apenas se abría camino en el reconocimiento artístico, estaba en pleno proceso de evolución y adopción de conceptos, pero con un cuerpo definido en un intervalo. Pablo Honey les había heredado la etiqueta de one hit wonder gracias al gran éxito de “Creep”, y quitársela de encima no iba a ser un trabajo fácil. Los miembros de la banda necesitaban salir adelante sin convertirse en un tributo a sí mismos. No sabían lo que querían pero sabían lo que no querían. De este modo Radiohead edita su segundo álbum: The Bends, un disco duro, enérgico, melancólico y visceral. Las letras de Thom Yorke impresas en ello mostraron un excepcional avance lírico, que se desprendía totalmente del anterior disco.  Los sonidos acústicos que predominaban en varias canciones le otorgaron al álbum puntos a favor para una aceptación que no estuviera bajo la sombra de su one hit wonder. La canción que tiene el papel de abrir es “Planet Telex”. No pone la atmósfera muy clara, es desorden dentro de una estructura bien definida, inicia duro, con expresiones de impotencia: “You can force it but it will not come, you can taste it but it will not form”. Bajo unas percusiones resonantes entra quien le da nombre al disco ‘The Bends’ con riff que nos dan referencia a Sonic Younth y donde la características guitarras del disco son fácilmente perceptibles. Algo a lo que el grupo nos empieza a acostumbrar (más evidente en sus posteriores discos), la melancolía, se hace tangible con ‘High And Dry’ con una caricia sonora te dice “Don’t leave me high, Don’t leave me dry” y con un afilado cuchillo: “…All your insides fall to pieces …”. ‘Fake Plastic Trees’ el retrato más apacible a la falsedad social, el reclamo más directo a la plasticidad humana, pero susurrado de la manera menos dolorosa y compresible “in the flake plastic earth”. Del mismo modo que ‘The Bends’ pero dejándote caer de lo alto esta ‘Bones’. Un trozo de fantasía y tranquilidad se te obsequia al escuchar ‘Nice Dream’ que cierra con unas estrepitosas guitarras para entrar en ‘Just’, tal vez la más clásica muestra del estilo guitarrero y brit-popero del grupo, la potencia de las guitarras y la voz de Thom se acoplan perfectamente. Dentro de este ambiente enérgico también se encuentra ‘My Iron Lung’ reflejante de la perdida de fe, ‘agradecidos’ por una enajenación de la realidad. Una suave melodía aparece desde la penumbra que dejan los rasgueos de ‘My Iron Lung’, como una continuación de lo empezado en ‘Nice Dream’: Bullet Proof … I Wish I Was’ “… Heat the pins and stab them in …”. Después de pasar por dos grandes canciones ‘Black Star’ y ‘Sulk’, Radiohead cierra anunciando algo, como augurando sobre sobre su próximo disco, ‘Street Spirit (Fade Out)’ deja una puerta abierta cerrando una fase del grupo. En concreto UN DISCO EXCELENTE."

}, {
    "id": "2",
    "album": "OK Computer",
    "anio": "1997",
    "formato": "CD, CS, LP, MD",
    "img": "assets/img/ok-computer.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/OK_Computer",
    "descripcion": "La expresión más bella del dolor es OK Computer. Paranoia, tristeza, desconocimiento, sensibilidad, ira, neurosis, estética se conjugan en cada una de la canciones de este disco, los sentimientos que te hace percibir son diversos y todos ellos compuestos y complejos, como un rocío de sentimientos en todo tu subconsiente. La ficción de una felicidad inducida por los medios se ataca a sus raíces de manera fuerte con este disco, “… Let down and hanging around, crushed like a bug in the ground …” nos dice ‘Let Down’ con un hermoso tono que nos da un confort ante el tema que retrata. La solución a la incomprensión e inadaptación a una sociedad indiferente se ve cerca cuando”one day I’m going to grow wing, a chemical reaction”. El encierro y confinamiento sentimental es claramente perceptible en ‘Paranoid android’ que nos recalca “Rain down … on me, from a great height”. Tintes políticos son notorios en ‘Electioneering’, un grito desesperado de soledad lo escuchamos cuando ‘Climbing up the walls’ entra en escena, ‘No surprises’ llega con el reclamo y el ahogo de la vida social agobiante y desesperante, deprimente y decepcionante. Encontramos un momento de calma, un murmullo de esperanza y un túnel de salida en ‘Lucky’, oh si! “… I feel my luck could change …” se escucha de Yorke, mientras un ambiente melancólico te invade, la inadaptación deja de ser evidente, estas dentro “I’m a roll, this time …”, pronto, ya no te encuentras solo, eres afortunado. “… hey man, slow down …” lo escuchamos en ‘The Tourist’, dirigiendo a sí mismo o a dios, el atraganto es grande y la presión no es menor, no será fácil darte cuenta que la tienes, mucho menos librarte de ella, un aviso de precaución. Después de escuchar todo el disco te encuentras perplejo, pero por alguna razón te encuentras reconfortado y pasivo, como acabo de despertado de un sueño tan real como tu mismo, obtienes libertad de algunas ataduras y algunas libertades te han atado ahora. Ya no percibes esa tristeza de modo drástico y oscuro, lo horrible es tan bello como lo ya conocido. Simplemente un disco PERFECTO."
}, {
    "id": "3",
    "album": "Kid A",
    "anio": "2000",
    "formato": "CD, CS, LP",
    "img": "assets/img/kid-a.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/Kid_A",
    "descripcion": "Después del tremendo disco de OK Computer todo mundo se preguntaba como sería la próxima producción de Radiohead, el camino pudo haber sido fácil y repetir la formula hubiera augurado buenos resultados, pero que paso? Radiohead cambio el esquema y el resultado fue sumamente bueno, este disco se presenta más abstracto, atmosférico, experimental, oscuro y electrónico. La guitarras dejaron el protagónico de la historia, los sonidos de los sintetizadores se hicieron escuchar más. El disco abre el entorno con ‘Everithing in its right place’ sembrando la duda de lo que esta bien y de lo que pensamos que no, los matices a la respuesta son diversos y difíciles de aclarar “… There are two colours in my head…”. Comienza ‘Kid A’ quien da nombre al disco, una manipulación constante. El ambiente se ve invadido por un pegaojo riff: ‘National Anthem’ proclamando la prensión que ejerce el mundo. Después de darte vueltas por un montón de recuerdos y sentimientos, es momento de escarpase por un momento, la presión ya no se siente y lo único que existe eres tu ‘How to disasppear Completely’ “… I’m not here, this isn’t happening … “. Cuando hemos salido de este estado entras a un estado de transición con el instrumental ‘Treefinger’. La dinámica de una sociedad capitalista es el tema que nos pinta ‘Optimistic’ , dando algunos momentos de apoyo y después cayendo de tan alto de como te encuentras. Momentos de viaje estan en ‘In Limbo’ este mundo no es sólo material, es tan irreal como real “… You’re living in a fantasy, this beautiful world …”. Hasta ahora te encuentras en un vaivén de emociones, no te encuentras en estado estable pero mueres por seguir en el camino. ‘Idioteque’ te vuelve a ubicar en un entorno real, un entorno vivo “… take the money run …” un poco de adrenalina se puede desprender después de escuchar esta obra (las versiones en vivo de esta canción son particularmente buenas, la primera vez que vi esta canciones en vivo en un video, no pude más que quedarme pasmado). Toca el turno a ‘Morning Bell’ según Thom Yorke es referente al divorcio, que se ve bien reflejado en la frase “Cut the kids in half” el tono es melancólico pero bastante reconfortante. Y cerrando ‘Motion Picture Soundtrack’ con un sonido suave, pero con mensajes no el mismo tono “… Cheap sex and sad films …”, así termina Kid A como un campo de sentimientos, como un examen de la realidad, analizando muchos de altibajos humanos. Un disco EXCELENTE."
}, {
    "id": "4",
    "album": "Amnesiac",
    "anio": "2001",
    "formato": "CD, CS, LP",
    "img": "assets/img/amnesiac.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/Amnesiac",
    "descripcion": "El ambiente no ha cambiado mucho, ahora el Kid A tiene un hermano al que se le ha considerado Amnesiac, Radiohead ha buscado un refinamiento en su expresividad y el resultado es claro con este disco. Sonidos más suaves y elaborados, estructuras y texturas menos complicadas y con el mismo objeto de transmitir sentimientos duros y espesos de la forma más bella y abstracta. El inicio del disco se ve marcado por unas percusiones, esta en puerta ‘Packt Like I n A Crushd Tin Box’ te estas dando cuenta que has estado en un estado de letargo durante mucho tiempo. Un ligero blues se asoma, es ‘Pyramid Song’ que junto con ‘Life In A Glass House’ nos dan referencia a Miles Davis y King Crimson. El manejo de los sintetizados juega un papel más que protagónico, le dan forma y cuerpo a gran parte de esta obra; son sonidos profundos, como lejanos, como un suave deslizar entre las notas, como un tranquilo desfile de sentimientos. ‘Pulk/Pull Revolving Doors’, Thom decide formar parte en los sonidos y transforma su voz en un instrumento mas, momentos de paz se respiran en el aire al escuchar esta canción, hay mil puertas y con una de ella llegas hasta ‘You And Whose Army?’ un suave y cálido grito “… We ride tonight, Ghost horses …”. Un pegajoso riff se comienza escuchar ‘I Might Be Wrong’ no te saca del camino y sigues dentro de la estela suave del disco. Un proceso extraño inicia, rítmica pero melancólica, es ‘Knives Out’ te atrapa pronto en un marco atmosférico, tan abstracta que nos recuerda al Kid A. Repitiendo en los créditos esta ‘Morning Bell’, regresa más nauseabunda y viseral, el divorcio esta dentro de la temática de nueva cuenta, dando un mensaje reconfortante como en al escuchar “… Light another cradle and release me”. La realidad es cruel y muy cruda, pero hay algo mas que hacer “… Be constructive with your blues …” no recomienda ‘Dollar & Cents’, una melancolía expresado con un guitarra y los efectos de un sintetizador se escuchan con el instrumental ‘Hunting Bear’. El dolor no se escucha tan mal mientras escuchas ‘Like Spinning Plates’. Este disco no se puede escuchar por partes, es todo una idea y un camino directo al subconsciente. Sin lugar a dudas, un EXCELENTE disco."
}, {
    "id": "5",
    "album": "Hail to the Thief",
    "anio": "2003",
    "formato": "CD, CS, LP",
    "img": "assets/img/hail-to-the-thief.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/Hail_to_the_Thief",
    "descripcion": "Después de haber llevado dos discos de exploración y experimentación sonora Radiohead mezcla todo lo aprendido en el pasado y lo usa como una potente herramienta que da forma y estructura a este disco. El ambiente político y bélico en el que se desarrollo este disco es un factor que determina el enfoque y parte de la visión del mismo. Un disco con marcados tintes políticos, con sentido anti-capitalista y hasta cierto punto anti-eua (dado que es uno de los mas ‘duros’ y rígidos en aplicar esta doctrina). La interrogante existencial esta presente (como ha sido característico del grupo)y exponiendo la sobre información derivada del sistema económico. Una excelente representante de la sutil inclusión de la política en las canciones del disco es ’2 + 2 = 5′, un tanto irreverente y desafiante, enérgica en lo que expresa, de esta canción toma nombre el disco “… on hail to the thief, but i’m not …” una critica a lo incoherente que puede ser la sociedad. Suave y muy despacio entra ‘Sit Down, Stand Up’ tan repetitiva como penetrante “On the rain drops”. Una pequeña puerta de escape es ‘Sail To The Moon’. ‘Backdrifts’ es un buen ejemplo donde se nota la síntesis de experiencias por parte del grupo y la fragilidad de la existencia queda expuesta “… We’re rotten fruit, we’re damaged goods … “. Los riff se hacen presentes de nueva cuenta con ‘, como en el ‘The Bends’ o el ‘Pablo Honey’ pero bien acompañados con sintetizadores que nos recuerdan a el ‘Kid A’ o ‘Amnesiac’ y que expresa la inadecuacion de la inmersión social a la que estas sujeto. En un suave grito de impotencia en un estilo popero se desarrolla ‘Where I End And You Begin’. Un ambiente bastante fúnebre se siente con ‘We Suck Young Blood’ y “I Will” suaves y hermosos lamentos. Entre unas bastante bien acomodadas percusiones escuchamos ‘There There’ “We are accidents waiting, waiting to happen”. Nuevamente las disfuncionalidades del matrimonio son expuestas por el grupo con ‘A Punch At The Wedding’ y que no hacer recordar a ‘Knives Out’.Radiohead cierra el álbum con tres temas que enmarcan la susceptibilidad a la que como persona estas expuesto, tienen “las manos atadas” como para intervenir. En concreto, un disco EXCELENTE."
}, {
    "id": "6",
    "album": "In Rainbows",
    "anio": "2007",
    "formato": "CD, LP, descarga digital",
    "img": "assets/img/in-rainbows.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/In_Rainbows",
    "descripcion": "In Rainbows (en español, «en arcoíris») es el séptimo álbum de estudio de la banda inglesa de rock alternativo Radiohead. Originalmente se lanzó el 10 de octubre de 2007 en formato digital y se convino que los interesados en descargarlo pagaran lo que creyeran conveniente. En segundo término, se lanzó en formato CD en muchos países durante la última semana de ese año. En Estados Unidos, se puso a la venta el 1 de enero de 2008. In Rainbows fue la primera producción tras la finalización de su contrato con EMI, rematando también la brecha más grande entre sus álbumes de estudio. Radiohead trabajó en el álbum durante más de dos años con los productores Mark Stent y Nigel Godrich, comenzando a principios de 2005. Durante el proceso, la banda salió de gira tres meses por Europa y Estados Unidos a mediados de 2006. Las letras del disco fueron más personales que en otros trabajos de la banda. El vocalista Thom Yorke describió varios temas como sus propias versiones de «canciones de seducción». Radiohead incorporó una amplia variedad de estilos musicales e instrumentos en el álbum, no haciendo uso exclusivo de música electrónica y arreglos para instrumentos de cuerda, sino también de piano, celesta y ondas Martenot. Tras su lanzamiento físico, In Rainbows ingresó en el primer puesto de la UK Albums Chart y del Billboard 200; hacia octubre de 2008, había vendido más de tres millones de copias a nivel mundial en diversos formatos físicos y digitales. Fue aclamado por la crítica y se lo incluyó en diversas listas de los mejores álbumes de 2007. En 2009 ganó dos premios Grammy al mejor álbum de música alternativa y al mejor paquete especial de edición limitada."
}, {
    "id": "7",
    "album": "The King of Limbs",
    "anio": "2011",
    "formato": "CD, LP, descarga digital",
    "img": "assets/img/the-king-of-limbs.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/The_King_of_Limbs",
    "descripcion": "The King of Limbs (en español «el rey de las extremidades») es el octavo álbum de estudio de la banda inglesa de rock alternativo Radiohead. Se anunció en su sitio web y a través de Twitter el 14 de febrero de 2011, siendo lanzado el 18 de febrero, un día antes que lo programado.1​ El álbum en formato físico fue publicado en Estados Unidos por Ticker Tape, en el Reino Unido por XL y en Japón por Hostess Entertainment. El disco cuenta con 8 pistas y se presentó en formato digital (WAV y MP3) así como también en una presentación física estándar en CD. Además, se puso a la venta un pack de lujo denominado Newspaper album que contiene vinilos, CD, cupones de descarga en formato digital y una gran cantidad de contenido no musical: arte en láminas, pequeñas ilustraciones, etc. Al igual que con su álbum Kid A (2000), la agrupación no lanzó ningún sencillo para The King of Limbs, aunque sí hicieron un videoclip de la canción «Lotus Flower». Está considerado una exploración del ritmo y de texturas más calmadas en comparación a sus anteriores trabajos, siendo desarrollado mediante un uso extenso de looping y sampling​ La mayor parte de las críticas que recibió fueron positivas, aunque las opiniones fueron más divididas en comparación con su anterior disco In Rainbows (2007). The King of Limbs fue nominado para cinco categorías en los premios Grammy, incluyendo la de mejor álbum alternativo, y también fue incluido como lo mejor del año 2011 por numerosas publicaciones, como The Wire, NME o PopMatters. El álbum fue seguido por el lanzamiento del disco de remixes TKOL RMX 1234567, y un video en directo, The King of Limbs: Live from the Basement."
}, {
    "id": "8",
    "album": "A Moon Shaped Pool",
    "anio": "2016",
    "formato": "CD, LP, descarga digital",
    "img": "assets/img/a-moon-shaped-pool.jpg",
    "linkWiki": "https://es.wikipedia.org/wiki/A_Moon_Shaped_Pool",
    "descripcion": "A Moon Shaped Pool (en español «un charco con forma de luna») es el noveno álbum de estudio de la banda de rock británica Radiohead. Fue lanzado como descarga digital el 8 de mayo de 2016, y en formato CD y LP el 17 de junio. La edición especial con dos temas extra y artwork adicional se pudo adquirir desde el 28 de septiembre. Radiohead trabajó en el álbum de forma intermitente desde el final de la gira en 2012 de su anterior disco, The King of Limbs. Fue grabado en el estudio La Fabrique de Saint-Rémy-de-Provence (sur de Francia) con Nigel Godrich. Incluye algunos temas escritos varios años antes: «True Love Waits» data al menos de 1995, «Burn the Witch» empezó a componerse sobre el 2000, y «Present Tense» es de 2008. En el álbum predominan los arreglos para cuerdas y coro de Jonny Greenwood, interpretados por la London Contemporary Orchestra. A Moon Shaped Pool recibió la aclamación de la crítica y se convirtió en el sexto álbum de Radiohead en ser número 1 en Reino Unido."
}];

  

  constructor() { 
    console.log("Servicio listo");
    // console.log(this.discos);
  }

  getDiscos(): Disco[]{
    return this.discos;
  }

  getDisco(id:number):Disco{
    return this.discos[id];
  }
}

export interface Disco {
  id:string;
  album:string;
  anio:string;
  formato:string;
  img:string;
  linkWiki:string;
  descripcion?:string;
}
