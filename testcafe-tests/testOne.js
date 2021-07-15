import { Selector} from 'testcafe';

const testOne = Selector('.list-devices')

fixture('first test')
    .page('http://localhost:3000/')

    test('selector-test-one', async t =>{
      if (testOne.exists){
        console.log('exists!')
      }
    })