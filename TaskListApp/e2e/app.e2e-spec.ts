import { TaskListWebAppPage } from './app.po';

describe('task-list-web-app App', () => {
  let page: TaskListWebAppPage;

  beforeEach(() => {
    page = new TaskListWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
