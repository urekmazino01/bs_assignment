import avro from 'avsc'

const eventType= avro.Type.forSchema({
    type: 'record',
    name: 'Pet',
    fields: [
      {
        name: 'category',
        type: 'string'
      },
      {
        name: 'noise',
        type: 'string'
      }
    ]
});

export { eventType };