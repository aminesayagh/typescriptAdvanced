// wrong

const printDeliminated = (doc: DeliminatedDocument) => {
  /* ... */
};

const printPlaintext = (doc: PlaintextDocument) => {
  /* ... */
};

const printDocument = (doc: DelimatedDocument | PlaintextDocument) => {
  /* 
  Argument of type 'deliminatedDocument | PlaintextDocument' is not assignable to parameter of type 'DelimatedDocument'. Property 'seperator' is missiong in type 
  'PlaintextDocument' but required in type 'DelimatedDocument'.
  */
  printDeliminated(doc); // error
}

// right

type DeliminatedDocument = {
  text: string,
  separator: 'sep',
}

type PlaintextDocument = {
  text: string
}

const printDeliminated = (doc: DeliminatedDocument) => {};
const printPlaintext = (doc: PlaintextDocument) => {};

const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
  if('separator' in doc){
     printDeliminated(doc);
  } else {
     printPlaintext(doc);
  }
}
