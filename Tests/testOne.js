import { Selector, ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture `My first fixture`
    .page `https://www.wikipedia.org/`;
    test('users can search', async t => {
      await t
      .click(Selector('#searchInput'))
      .typeText(Selector('#searchInput'), 'vikings')
      .click(Selector('button[type=submit]'))
      .expect(getLocation()).contains('en.wikipedia.org/wiki/Vikings');
    });
