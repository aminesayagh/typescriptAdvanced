export type FinalInvoice = {
  __typename: 'FinalInvoice',
  /* Other fields omitted */
};

export type DraftInvoice = {
  __typename: 'DraftInvoice',
  /* Other fields omitted */
};

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === 'FinalInvoice';
}

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === 'DraftInvoice';
}

const ButtonInvoice = () => {
  return (
    <>
      {selectedInvoice && isFinalInvoice(selectedInvoice) && (
        <Button variant='contained' color='primary' onClick={() => sendEmail(selectedInvoice)}>
           Send Invoice
        </Button>
      )}
      
    </>
  )
}
