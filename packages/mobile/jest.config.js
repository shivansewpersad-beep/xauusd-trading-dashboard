{
  "version": "5.0",
  "preset": "react-native",
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
  "testEnvironment": "node",
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}
