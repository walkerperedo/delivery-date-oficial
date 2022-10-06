import {
  Card,
  Page,
  Layout,
  TextContainer,
  Navigation,
  Stack,
  Link,
  Heading,
  EmptyState,
  Grid,
  Listbox,
  Frame,
} from "@shopify/polaris";
import { TitleBar, useNavigate } from "@shopify/app-bridge-react";

import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import {
  GeneralSettings,
  Payments,
  ProductSettings,
  Support,
  Tutorials,
} from "../components";

export default function HomePage() {
  const [page, setPage] = useState("generalSettings");
  return (
    <>
      <TitleBar
        title="Delivery Date"
        primaryAction={{
          content: "Save configuration",
        }}
      />
      <Page fullWidth>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 2, md: 2, lg: 3 }}>
            <Frame>
              <Navigation location="/">
                <EmptyState heading="Order Deadline">
                  <p>
                    Satisfy you custoomers biggest questions of "When will I get
                    it?"
                  </p>
                </EmptyState>
                <Navigation.Section
                  items={[
                    {
                      url: "/",
                      label: "General Settings",
                      icon: HomeMinor,
                      onClick: () => setPage("generalSettings"),
                      selected: page == "generalSettings",
                    },
                    {
                      url: "/productSettings",
                      label: "Product Settings",
                      onClick: () => setPage("productSettings"),
                      selected: page == "productSettings",
                    },
                    {
                      url: "/managePayments",
                      label: "Manage Payments",
                      onClick: () => setPage("payments"),
                      selected: page == "payments",
                    },
                    {
                      url: "/support",
                      label: "Support",
                      onClick: () => setPage("support"),
                      selected: page == "support",
                    },
                    {
                      url: "/tutorials",
                      label: "Video Tutorials",
                      onClick: () => setPage("tutorials"),
                      selected: page == "tutorials",
                    },
                  ]}
                />
              </Navigation>
            </Frame>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 4, md: 4, lg: 9 }}>
            {page == "generalSettings" && <GeneralSettings />}
            {page == "productSettings" && <ProductSettings />}
            {page == "tutorials" && <Tutorials />}
            {page == "support" && <Support />}
            {page == "payments" && <Payments />}
          </Grid.Cell>
        </Grid>
      </Page>
    </>
  );
}
