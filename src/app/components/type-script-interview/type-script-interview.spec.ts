import {
  ComponentFixture,
  TestBed,
} from "@angular/core/testing";

import { TypeScriptInterview } from "./type-script-interview";

describe("TypeScriptInterview", () => {
  let component: TypeScriptInterview;
  let fixture: ComponentFixture<TypeScriptInterview>;

  beforeEach(
    async () => {
      await TestBed.configureTestingModule(
        {
          imports: [
            TypeScriptInterview,
          ],
        },
      ).compileComponents();

      fixture =
        TestBed.createComponent(
          TypeScriptInterview,
        );
      component =
        fixture.componentInstance;
      await fixture.whenStable();
    },
  );

  it("should create", () => {
    expect(
      component,
    ).toBeTruthy();
  });
});
