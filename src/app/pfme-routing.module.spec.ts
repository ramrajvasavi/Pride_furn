import { PfmeRoutingModule } from './pfme-routing.module';

describe('PfmeRoutingModule', () => {
  let pfmeRoutingModule: PfmeRoutingModule;

  beforeEach(() => {
    pfmeRoutingModule = new PfmeRoutingModule();
  });

  it('should create an instance', () => {
    expect(pfmeRoutingModule).toBeTruthy();
  });
});
