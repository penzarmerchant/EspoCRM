import { faker } from "@faker-js/faker";
import fs from "fs/promises";

export async function generateMockData(filePath: string): Promise<any> {
  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    const fakedata = {
      nameofAccount: faker.company.name(),
      website: faker.internet.domainName(),
      email1: faker.internet.email(),
      phoneAccount: faker.phone.number(),
      streetBillingAddress: faker.location.streetAddress(),
      postalCode1: faker.location.zipCode(),
      county1: faker.location.county(),
      country1: faker.location.country()
    };
    const updatedData = { ...data, ...fakedata };
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
    return updatedData;
  } catch (error) {
    console.error("error in generating mock data  ", error);
    throw error;
  }
}
