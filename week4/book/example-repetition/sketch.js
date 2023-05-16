/*

This is a p5.js sketch that creates a book by repeating some
word 50000 times, with punctuation and organization added so 
that it looks more like a real book.

You are welcome to use this template to make your own 
repetion-based computer-generated book.

What I Have Done:
 - chosen a word to repeat: quack
 - written the code that repeats that word an arbitrary number of 
   times, along with punctuation.
  
What You Should Do:
 - choose a different word. Animals sounds and screams have already
   been done. 
 - tweak the book layout options so it looks good.
 - take a look through the code below, which is written in a fairfly
   verbose way so that you can adjust any aspect you need to. 
   
*/

let word = "quack";
let wc = 0;

function setup() {

  let content = createElement("div");
  content.attribute("id","content");
  
  content.child(createElement("h1","Many " + word + "s"));
  
  
  // make a sentence
  
  while( wc < 50000){
    content.child(createElement("h2",String(word+" ").repeat(random(2,6)).toUpperCase()));
    
    for (let p = 0; p < random(5,20); p++){
      let paragraph = '';
      for (let s = 0; s < random(3,20); s++){
        let internalPunct = [",",",",",",";"," --"];
        let endPunct = [".",".","?","!"];
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = random(9,25);
        wc += sentenceLength + 1;
        for (let w = 0; w < sentenceLength; w++){
          sentence += " " + word;
          if (random() < 0.2){
            sentence += random(internalPunct);
          }
        }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p",paragraph));
    }
    
  
    
  }
  
  // make a book out of all the content
  Bindery.makeBook({
    content: '#content',
    
    rules: [
      Bindery.PageBreak({
        selector: "h1",
        position: "after"
      }),
    Bindery.PageBreak({
      selector: 'h2',
      position: 'before',
      continue: 'right'
    })]
  });
  
  //console.log(sentence);
}
