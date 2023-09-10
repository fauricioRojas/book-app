export enum SELECT {
  FULL_MAINTENANCE = `
    id,
    vehicles (
      id
    ),
    notes (
      id,
      type,
      date,
      description,
      photo
    ),
    cost,
    kilometers
  `,
  MINIMAL_PET = `
    id,
    name,
    breed,
    notes (
      id,
      type,
      date
    )
  `,
  FULL_PET = `
    id,
    name,
    breed,
    notes (
      id,
      type,
      date,
      description,
      photo
    ),
    procedures (
      id,
      pets (
        id
      ),
      notes (
        id,
        type,
        date,
        description,
        photo
      ),
      cost,
      weight,
      nextDate
    )
  `,
  FULL_PROCEDURE = `
    id,
    pets (
      id
    ),
    notes (
      id,
      type,
      date,
      description,
      photo
    ),
    cost,
    weight,
    nextDate
  `,
  MINIMAL_VEHICLE = `
    id,
    plateNumber,
    brand,
    notes (
      id,
      type,
      date
    )
  `,
  FULL_VEHICLE = `
    id,
    plateNumber,
    brand,
    model,
    notes (
      id,
      type,
      date,
      description,
      photo
    ),
    maintenances (
      id,
      vehicles (
        id
      ),
      notes (
        id,
        type,
        date,
        description,
        photo
      ),
      cost,
      kilometers
    )
  `,
}
