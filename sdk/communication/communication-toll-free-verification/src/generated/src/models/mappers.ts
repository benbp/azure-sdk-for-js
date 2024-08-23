/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CampaignBrief: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBrief",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Uuid",
        },
      },
      status: {
        serializedName: "status",
        type: {
          name: "String",
        },
      },
      reviewNotes: {
        serializedName: "reviewNotes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReviewNote",
            },
          },
        },
      },
      submissionDate: {
        serializedName: "submissionDate",
        type: {
          name: "DateTime",
        },
      },
      statusUpdatedDate: {
        serializedName: "statusUpdatedDate",
        type: {
          name: "DateTime",
        },
      },
      countryCode: {
        serializedName: "countryCode",
        type: {
          name: "String",
        },
      },
      businessPointOfContact: {
        serializedName: "businessPointOfContact",
        type: {
          name: "Composite",
          className: "BusinessPointOfContact",
        },
      },
      businessInformation: {
        serializedName: "businessInformation",
        type: {
          name: "Composite",
          className: "BusinessInformation",
        },
      },
      useCaseInfo: {
        serializedName: "useCaseInfo",
        type: {
          name: "Composite",
          className: "UseCaseInfo",
        },
      },
      phoneNumbers: {
        serializedName: "phoneNumbers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      estimatedMonthlyVolume: {
        serializedName: "estimatedMonthlyVolume",
        type: {
          name: "String",
        },
      },
      additionalInformation: {
        serializedName: "additionalInformation",
        type: {
          name: "String",
        },
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CampaignBriefAttachmentSummary",
            },
          },
        },
      },
      optInDetails: {
        serializedName: "optInDetails",
        type: {
          name: "Composite",
          className: "OptInDetails",
        },
      },
      multipleNumbersJustification: {
        serializedName: "multipleNumbersJustification",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ReviewNote: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReviewNote",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const BusinessPointOfContact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BusinessPointOfContact",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        type: {
          name: "String",
        },
      },
      lastName: {
        serializedName: "lastName",
        type: {
          name: "String",
        },
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
      address: {
        serializedName: "address",
        type: {
          name: "Composite",
          className: "Address",
        },
      },
    },
  },
};

export const Address: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Address",
    modelProperties: {
      addressLine1: {
        serializedName: "addressLine1",
        type: {
          name: "String",
        },
      },
      addressLine2: {
        serializedName: "addressLine2",
        type: {
          name: "String",
        },
      },
      locality: {
        serializedName: "locality",
        type: {
          name: "String",
        },
      },
      administrativeDivision: {
        serializedName: "administrativeDivision",
        type: {
          name: "String",
        },
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String",
        },
      },
      country: {
        serializedName: "country",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BusinessInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BusinessInformation",
    modelProperties: {
      companyName: {
        serializedName: "companyName",
        type: {
          name: "String",
        },
      },
      companyUrl: {
        serializedName: "companyUrl",
        type: {
          name: "String",
        },
      },
      address: {
        serializedName: "address",
        type: {
          name: "Composite",
          className: "Address",
        },
      },
    },
  },
};

export const UseCaseInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCaseInfo",
    modelProperties: {
      sampleMessages: {
        serializedName: "sampleMessages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      useCase: {
        serializedName: "useCase",
        type: {
          name: "String",
        },
      },
      useCaseSummary: {
        serializedName: "useCaseSummary",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CampaignBriefAttachmentSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBriefAttachmentSummary",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
      fileName: {
        serializedName: "fileName",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OptInDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OptInDetails",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      options: {
        serializedName: "options",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Option",
            },
          },
        },
      },
    },
  },
};

export const Option: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Option",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      imageUrls: {
        serializedName: "imageUrls",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError",
        },
      },
    },
  },
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError",
            },
          },
        },
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError",
        },
      },
    },
  },
};

export const CampaignBriefs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBriefs",
    modelProperties: {
      campaignBriefs: {
        serializedName: "campaignBriefs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CampaignBrief",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CampaignBriefSummaries: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBriefSummaries",
    modelProperties: {
      campaignBriefSummaries: {
        serializedName: "campaignBriefSummaries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CampaignBriefSummary",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CampaignBriefSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBriefSummary",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      countryCode: {
        serializedName: "countryCode",
        type: {
          name: "String",
        },
      },
      briefType: {
        defaultValue: "tollfreeVerification",
        isConstant: true,
        serializedName: "briefType",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        type: {
          name: "String",
        },
      },
      phoneNumbers: {
        serializedName: "phoneNumbers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const CampaignBriefAttachment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBriefAttachment",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Uuid",
        },
      },
      typeParam: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      fileName: {
        constraints: {
          MinLength: 1,
        },
        serializedName: "fileName",
        required: true,
        type: {
          name: "String",
        },
      },
      fileSizeInBytes: {
        serializedName: "fileSizeInBytes",
        type: {
          name: "Number",
        },
      },
      fileType: {
        serializedName: "fileType",
        required: true,
        type: {
          name: "String",
        },
      },
      fileContentBase64: {
        constraints: {
          MinLength: 1,
        },
        serializedName: "fileContentBase64",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CampaignBriefAttachments: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CampaignBriefAttachments",
    modelProperties: {
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CampaignBriefAttachment",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};
