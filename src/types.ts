export interface IQuery {
  children: any,
  query: any,
  slug?: string,
  variables?: any,
  brand?: Array<string>,
  priceFrom?: number,
  priceTo?: number,
  sort?: string,
  page?: number,
  pageSize?: number,
  search?:string,
  id?: number | null,
}

export interface IFooterResponse {
  data: {
    footer: {
      data: {
        attributes: {
          email: string,
          Phone1: string,
          Phone2: string,
          Phone3: string,
          CompanyName: string,
          OGRN: string,
          INN: string,
          KPP: string,
          AdresObosoblennogoPodrazdeleniya: string,
          AdresSklada1Index: string,
          AdresSklada1Adres: string,
          AdresSklada2Index: string,
          AdresSklada2Adres: string,
        }
      }
    }
  }
}

export interface IHeaderResponse {
  data: {
    header: {
      data: {
        attributes: {
          Phone: string,
          Mail: string,
        }
      }
    }
  }
}

export interface IAboutResponse {
  data: {
    about: {
      data: {
        attributes: {
          content: string,
        }
      }
    }
  }
}

export interface IBrandsResponse {
  data: {
    brends: {
        data: Array<{
          attributes: {
            title: string,
          }
        }>
    }
  }
}

export interface ICategotiesResponse {
  data: {
    categories: {
      data: Array<ICategory>,
    }
  }
}

interface ICategory {
  attributes: {
    name: string,
    podkategoriyass: {
      data: {
        attributes: {
          slug: string,
          title: string,
          kategoriya: {
            data: {
              attributes: {
                slug: string,
              }
            }
          }
        }
      }
    }
  }
}

export interface ISubCategotiesResponse {
  data: {
    podkategoriyas: {
      data: Array<ISubCategory>,
    }
  }
}

export interface IFiltredProductsResponse {
  data: {
    podkategoriyas: {
      data: Array<IFiltredProduct>,
    }
  }
}

interface IFiltredProduct {
  attributes: {
    slug: string,
    title: string,
    tovars: {
      data: Array<IProduct>,
    }
    kategoriya: {
      data: {
        attributes: {
          name: string,
        }
      }
    }
  }
}

interface ISubCategory {
  attributes: {
    title: string,
    kategoriya: {
      data: {
        attributes: {
          name: string,
        }
      }
    }
  }
}

export interface IPartnersResponse {
  data: {
    partners: {
      data: Array<IPartner>,
    }
  }
}

export interface IProductsResponse {
  data: {
    articles: {
      data: Array<IProduct>,
    }
  }
}

interface IProduct {
  attributes: {
    title: string,
    price: number,
    podkategoriya: {
      data: {
        attributes: {
          title: string,
          kategoriya: {
            data: {
              attributes: {
                name: string,
              }
            }
          }
        }
      }
    }
    image: {
      data: {
        attributes: {
          url: string,
        }
      }
    }
  }
}

export interface IHitsResponse {
  data: {
    hits: {
      data: Array<IHit>,
    }
  }
}

export interface IPreferencesResponse {
  data: {
    prefereces: {
      data: Array<IPreference>,
    }
  }
}

export interface ISlidersResponse {
  data: {
    sliders: {
      data: Array<ISlider>,
    }
  }
}

interface IPartner {
  attributes: {
    image: {
      data: {
        attributes: {
          url: string,
        }
      }
    }
  }
}

interface IHit {
  attributes: {
    title: string,
    price: string,
    image: {
      data: {
        attributes: {
          url: string,
        }
      }
    }
  }
}

interface IPreference {
  attributes: {
    title: string,
    subtitle: string,
    iconName: string,
  }
}

interface ISlider {
  attributes: {
    title: string,
    image: {
      data: {
        attributes: {
          url: string,
        }
      }
    }
  }
}

export interface IBigBannerResponse {
  data: {
    banner: {
      data: {
        attributes: {
          title_1: string,
          image1: {
            data: {
              attributes: {
                url: string,
              }
            }
          }
          link1: string,
          title2: string,
          text2: string,
          colortext2: string,
          image2: {
            data: {
              attributes: {
                url: string,
              }
            }
          }
          link2: string,
          title3: string,
          text3: string,
          colortext3: string,
          link3: string,
          image3: {
            data: {
              attributes: {
                url: string,
              }
            }
          }
          title4: string,
          text4: string,
          image4: {
            data: {
              attributes: {
                url: string,
              }
            }
          }
          link4: string,
        }
      }
    }
  }
}
