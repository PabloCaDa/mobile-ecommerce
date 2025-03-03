import { render, screen } from "@testing-library/react";
import { SpecificationsTable } from "./SpecificationsTable";
import { TEXTS } from "@/constants";
import { mockPhoneFixture } from "@/test/__fixtures__/phones";

describe("SpecificationsTable", () => {
  it("renders the title correctly", () => {
    render(
      <SpecificationsTable
        specs={mockPhoneFixture.specs}
        name={mockPhoneFixture.name}
        brand={mockPhoneFixture.brand}
        description={mockPhoneFixture.description}
      />,
    );
    expect(
      screen.getByText(TEXTS.specoficationsTable.title.toUpperCase()),
    ).toBeInTheDocument();
  });

  it("renders all table entries correctly", () => {
    render(
      <SpecificationsTable
        specs={mockPhoneFixture.specs}
        name={mockPhoneFixture.name}
        brand={mockPhoneFixture.brand}
        description={mockPhoneFixture.description}
      />,
    );
    expect(screen.getByText(mockPhoneFixture.name)).toBeInTheDocument();
    expect(screen.getByText(mockPhoneFixture.brand)).toBeInTheDocument();
    expect(
      screen.getByText(mockPhoneFixture.specs.battery),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPhoneFixture.specs.mainCamera),
    ).toBeInTheDocument();
    expect(screen.getByText(mockPhoneFixture.specs.os)).toBeInTheDocument();
    expect(
      screen.getByText(mockPhoneFixture.specs.processor),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPhoneFixture.specs.resolution),
    ).toBeInTheDocument();
    expect(screen.getByText(mockPhoneFixture.specs.screen)).toBeInTheDocument();
    expect(
      screen.getByText(mockPhoneFixture.specs.screenRefreshRate),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPhoneFixture.specs.selfieCamera),
    ).toBeInTheDocument();
  });
});
